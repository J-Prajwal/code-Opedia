import { ReducerProps, UserDetails } from "../../constants/constants";

type InitialState = {
  isLoading: boolean;
  isError: boolean;
  username: string | null;
  userDetails: UserDetails | null;
  token: string | null;
  isAuth: boolean;
};

const initialState: InitialState = {
  isLoading: false,
  isAuth: false,
  isError: false,
  token: null,
  userDetails: null,
  username: null,
};

export const reducer = (
  state: InitialState = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    default:
      return state;
  }
};
