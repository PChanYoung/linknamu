type Props = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-6 py-4 text-center text-[15px] font-medium text-stone-700 shadow-glass backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/80 active:translate-y-0 motion-reduce:transform-none dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-glass-dark dark:hover:bg-white/[0.1] dark:hover:shadow-glass-dark"
    >
      {title}
    </a>
  );
}
