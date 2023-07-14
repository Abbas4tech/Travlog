export interface PhotoProps {
  width: number;
  height: number;
  bucketUrl: string;
  isPrority?: boolean;
  alt: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  icon?: boolean;
  iconUrl?: string;
  position?: "before" | "after";
  iconName?: string;
  classes: string[];
}
