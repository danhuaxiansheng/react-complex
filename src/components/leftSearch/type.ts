export type filterType = {
  label: string | number;
  count?: number;
  checked: boolean;
  value?: string | number;
  id?: string;
  className?: string;
}

export type filterTypeGroup = {
  label: string;
  children: Array<filterType>;
}
