export interface Celebrity {
  name: string;
  description: string;
  thumbsUp: number;
  thumbsDown: number;
  thumbsUpSelected: boolean;
  thumbsDownSelected: boolean;
  period: number;
  industry: string;
  image: string;
  id: number;
}

export interface LadingResponseInterface {
  celebrities: Celebrity[];
}
