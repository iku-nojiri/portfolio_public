interface LinkListType {
  name: string;
  href: string;
  externalLink?: boolean;
}

export const LINK_LIST: LinkListType[] = [
  {
    name: 'ホーム',
    href: '/',
  },
  {
    name: 'スキルセット',
    href: '/skills',
  },
  {
    name: '制作の実績',
    href: '/works',
  },
  {
    name: '私について',
    href: '/about',
  },
  {
    name: 'お問い合わせ',
    href: '/contact',
  },
];
