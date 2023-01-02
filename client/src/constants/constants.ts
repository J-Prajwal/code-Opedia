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

export type AuthInitialState = {
  isLoading: boolean;
  isError: boolean;
  username: string | null;
  userDetails: UserDetails | null;
  token: string | null;
  isAuth: boolean;
};

export type ContestsInitialState = {
  isLoading: boolean;
  isError: boolean;
  contests: Contests | [];
};

export interface Contests {
  duration: number;
  end: string;
  event: string;
  host: string;
  href: string;
  id: number;
  parsed_at: string;
  problems: null;
  resource: string;
  resource_id: number;
  start: string;
}
