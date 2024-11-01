const AUTHOR_IN_JP_FROM_ENV = import.meta.env.VITE_AUTHOR_IN_JP ?? '名無しの権兵衛';
const AUTHOR_IN_EN_FROM_ENV = import.meta.env.VITE_AUTHOR_IN_EN ?? 'JOHN DOE';
const PATH_TO_AUTHOR_PIC_FROM_ENV = import.meta.env.VITE_PATH_TO_AUTHOR_PIC ?? 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4';
const INSTAGRAM_LINK_FROM_ENV = import.meta.env.VITE_INSTAGRAM_LINK ?? 'https://www.instagram.com/';
const GITHUB_LINK_FROM_ENV = import.meta.env.VITE_GITHUB_LINK ?? 'https://github.com/';

export const COMMON_DATA: Record<string, string> = {
  authorInJp: AUTHOR_IN_JP_FROM_ENV,
  authorInEn: AUTHOR_IN_EN_FROM_ENV,
  pathToAuthorPic: PATH_TO_AUTHOR_PIC_FROM_ENV,
  instagramLink: INSTAGRAM_LINK_FROM_ENV,
  githubLink: GITHUB_LINK_FROM_ENV,
};
