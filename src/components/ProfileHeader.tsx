import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-gray-900 bg-gray-100 dark:border-gray-100 dark:bg-gray-800 sm:h-40 sm:w-40">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="160px" className="object-cover" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-5xl font-bold text-gray-700 dark:text-gray-200">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
