export interface ProblemInitialState {
  isLoading: boolean;
  isError: boolean;
  isPostSuccess: boolean;
  problems: Problem[] | [];
  problem: null | Problem
}

export interface Problem {
  _id: string | undefined;
  userId: string | undefined;
  problem_url: string | undefined;
  platform_name: string | undefined;
  problem_name: string | undefined;
  description: string | undefined;
  textual_approach: string | undefined;
  pictorial_approach: string | undefined;
  textual_reference: string | undefined;
  video_reference: string | undefined;
  solution_code: string | undefined;
  language_used: string | undefined;
  difficulty: string | undefined;
}

export type ProblemReducer = {
  type: string;
  payload?: Problem[] | [];
};
