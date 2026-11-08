type Props = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/70 bg-white/45 px-16 py-4 text-center text-[15px] font-medium text-stone-700 shadow-glass backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/80 active:translate-y-0 motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-glass-dark dark:hover:bg-white/[0.1] dark:hover:shadow-glass-dark"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-stone-400 dark:text-stone-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
