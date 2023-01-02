export interface UserDetails {
  fullname: string;
  username: string;
  email: string;
  skills: string[];
  github: string;
  linkedin?: string;
  about_me: string;
  leetcode?: string;
  gfg?: string;
  hackerRank?: string;
  codeChef?: string;
  is_admin: boolean;
  no_of_problems: boolean;
  easy: boolean;
  medium: boolean;
  hard: boolean;
  no_of_contests: boolean;
  verified: boolean;
}

export type ReducerProps = {
  type: string;
  payload?: string;
};

export type UserCredentials = {
  email: string;
  password: string;
};
