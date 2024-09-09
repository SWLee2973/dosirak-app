import { TUser } from "./user";

export type TFeed = {
  collectionId: string;
  id: string;
  title: string;
  writer: string;
  images: string[];
  member: string;
  tags: string[];
  comments: string[];
  created: string;
  maintext: string;
  like: string[];
  expand: {
    writer: TUser;
  };
};
