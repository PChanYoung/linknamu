import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6 sm:py-12">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
      </div>

      <ul className="mt-10 flex flex-col gap-6">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-12 text-center text-xs text-gray-400 dark:text-gray-600">
        링크나무
      </footer>
    </main>
  );
}
