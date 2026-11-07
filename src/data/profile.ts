export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로. 비워두면 이름 첫 글자로 대체됩니다. */
  imageUrl?: string;
  links: LinkItem[];
};

// TODO: 실제 링크로 교체하세요.
export const profile: Profile = {
  name: "박찬영",
  bio: "세계 최강의 바이브코더",
  imageUrl: undefined,
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "blog", title: "블로그", url: "https://example.com/" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
  ],
};
