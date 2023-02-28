export interface TutorialInitialState {
  isLoading: boolean;
  isError: boolean;
  isPostSuccess: boolean;
  tutorials: Tutorial[] | [];
}


export interface Tutorial {
  title: string | undefined;
  youtube_video_embed: string | undefined;
  article_link: string | undefined;
  category: string | undefined;
  description: string | undefined;
  isPlaylist: boolean | undefined;
  sub_category: string | undefined;
}

export type TutorialReducer = {
  type: string;
  payload?: Tutorial[] | [];
};
