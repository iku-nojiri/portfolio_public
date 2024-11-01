export type { BtnPropsType };

interface BtnPropsType {
  as?: 'button' | 'a';
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
  variant?: string;
  href?: string;
  externalLink?: boolean;
  disabled?: boolean;
  onClick?: ((e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void) | (() => void);
}
