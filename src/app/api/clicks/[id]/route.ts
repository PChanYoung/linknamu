import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

/** 해당 링크의 클릭 수를 1 늘리고 새 값을 반환합니다. 예: { id: "github", count: 43 } */
export async function POST(_req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // profile.ts에 등록된 링크만 허용해 임의의 문서가 생기지 않도록 합니다.
  if (!profile.links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const doc = await (await getClicksCollection()).findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: doc?.count ?? 1 });
  } catch (err) {
    console.error(`[POST /api/clicks/${id}]`, err);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
