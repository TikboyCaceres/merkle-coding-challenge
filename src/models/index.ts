export interface IStory {
  id: string;
  by: string;
  descendants: number;
  score: number;
  time: string;
  title: string;
  type: string;
  url: string;
}

export interface IUser {
  id: string;
  created: string;
  karma: number;
  submitted: number[];
}
