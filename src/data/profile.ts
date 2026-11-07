export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로 또는 외부 URL. 비워두면 이름 첫 글자로 대체됩니다. */
  imageUrl?: string;
  links: LinkItem[];
};

// TODO: 실제 링크로 교체하세요.
export const profile: Profile = {
  name: "박찬영",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/320x320/orange/white/png",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "blog", title: "블로그", url: "https://example.com/" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
  ],
};
