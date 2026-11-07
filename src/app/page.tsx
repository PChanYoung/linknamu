import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pb-10 pt-6 sm:px-8 sm:pt-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-6 sm:mt-10">
        <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      </div>

      <ul className="mt-10 flex flex-col gap-4">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-16 text-center text-xs font-medium tracking-widest text-stone-400 dark:text-stone-500">
        링크나무
      </footer>
    </main>
  );
}
