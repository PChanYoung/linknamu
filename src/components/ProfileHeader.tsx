import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 바깥 테두리(빛 받는 림) + 아래로 떨어지는 그림자로 살짝 떠 있는 느낌 */}
      <div className="h-28 w-28 rounded-full bg-gradient-to-br from-white to-orange-100 p-1 shadow-avatar dark:from-white/25 dark:to-white/5 dark:shadow-avatar-dark sm:h-32 sm:w-32">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-orange-50 ring-1 ring-inset ring-black/5 dark:bg-stone-800">
          {imageUrl ? (
            <Image src={imageUrl} alt={`${name} 프로필 사진`} fill sizes="128px" className="object-cover" priority />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-4xl font-bold text-stone-500 dark:text-stone-300">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>
      <h1 className="mt-5 text-xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{name}</h1>
      <p className="mt-1.5 text-balance break-keep text-sm leading-relaxed text-stone-500 dark:text-stone-400">{bio}</p>
    </header>
  );
}
