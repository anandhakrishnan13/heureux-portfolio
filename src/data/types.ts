export type Project = {
  id: string;
  name: string;
  action: string;
  stack: string[];
  /** Source repository. */
  href: string;
  /** Optional deployed demo; shows a globe link on the card when set. */
  live?: string;
};
