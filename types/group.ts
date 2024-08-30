import { RecordModel } from "pocketbase";

export type TGroup = {
  collectionId: string;
  id: string;
  hashTag: { hashTag: string[] };
  created: string;
  i_like_it: number;
  i_participate_it: number;
  isRecruiting: boolean;
  like: string[];
  participant: string[];
  thumbnail: string;
  title: string;
  last_upload_time: Date;
};

export type TRecommendGroup = {
  items: TGroup[];
  page: number;
  totalPages: number;
};
