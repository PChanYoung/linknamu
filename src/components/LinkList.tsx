"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Counts = Record<string, number>;

// 클릭 수는 늘어나기만 하므로, 응답 순서가 엇갈려도 큰 값을 남기면 항상 최신 값이 됩니다.
function mergeMax(prev: Counts, next: Counts): Counts {
  const merged = { ...prev };
  for (const [id, count] of Object.entries(next)) merged[id] = Math.max(merged[id] ?? 0, count);
  return merged;
}

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 표시합니다.
  const [counts, setCounts] = useState<Counts>(() => Object.fromEntries(links.map((l) => [l.id, 0])));

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { counts: Counts }) => setCounts((prev) => mergeMax(prev, data.counts)))
      .catch((err) => {
        if (err.name !== "AbortError") console.error("클릭 수 불러오기 실패", err);
      });
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) => {
    // 화면에는 바로 +1 하고, 서버 응답이 오면 실제 값으로 맞춥니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((data: { id: string; count: number }) => setCounts((prev) => mergeMax(prev, { [data.id]: data.count })))
      .catch((err) => {
        console.error("클릭 수 저장 실패", err);
        setCounts((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 1) - 1, 0) }));
      });
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard title={link.title} url={link.url} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
