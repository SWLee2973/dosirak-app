export type TUser = {
  username: string;
  email?: string;
  phone: string;
  name: string;
  thumbnail?: string;
  follow?: string[];
  follower?: string[];
  nickname: string;
  bookmark?: string[];
  participate?: string[];
  status: number;
  recent_keyword?: string;
  created?: Date;
  updated?: Date;
};
