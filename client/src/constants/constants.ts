export interface UserDetails {
  fullname: string;
  username: string;
  email: string;
  password: string;
  skills: string[];
  github: string;
  linkedin: string;
  about_me: string;
  leetcode: string;
  gfg: string;
  hackerRank: string;
  codeChef: string;
  is_admin: boolean;
  no_of_problems: number;
  easy: number;
  medium: number;
  hard: number;
  no_of_contests: number;
  verified: boolean;
  profile_picture: string;
  __v?: number;
  _id?: string;
}

export type ReducerProps = {
  type: string;
  payload?: string;
};

export type AuthReducer = {
  type: string;
  payload?: AuthPayload;
};

export interface AuthPayload {
  token: string;
  message: string;
  user: UserDetails;
}

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
  contests: Contests[] | [];
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

export interface ContestDetails {
  duration: number;
  end: string;
  event: string;
  host: string;
  href: string;
  id: number;
  parsed_at: string | null;
  problems: string | null;
  resource: string;
  resource_id: number;
  start: string;
}

export type State = {
  auth: AuthInitialState;
  contest: ContestsInitialState;
};

export type SignupProps = {
  userDetails: UserDetails;
  existingUsername?: boolean;
  handleOnChange: (e: any) => void;
};

export type Store = {
  auth?: AuthInitialState;
  contest?: ContestsInitialState;
};
