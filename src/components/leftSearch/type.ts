export type filterType = {
  label: string;
  count: number;
  checked: boolean;
  id?: string;
  className?: string;
}

export type filterTypeGroup = {
  label: string;
  children: Array<filterType>;
}
