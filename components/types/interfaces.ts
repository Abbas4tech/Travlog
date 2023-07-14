export interface PhotoProps {
  width: number;
  height: number;
  bucketUrl: string;
  isPrority?: boolean;
  alt: string;
  classes?: string[];
}

export interface ButtonProps {
  children: React.ReactNode;
  Icon?: JSX.Element;
  position?: "before" | "after";
  iconName?: string;
  classes: string[];
}
