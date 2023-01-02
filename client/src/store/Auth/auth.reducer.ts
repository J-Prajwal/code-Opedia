import { AuthInitialState, ReducerProps } from "../../constants/constants";

const initialState: AuthInitialState = {
  isLoading: false,
  isAuth: false,
  isError: false,
  token: null,
  userDetails: null,
  username: null,
};

export const reducer = (
  state: AuthInitialState = initialState,
  { type, payload }: ReducerProps
) => {
  switch (type) {
    default:
      return state;
  }
};
