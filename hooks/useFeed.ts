import pbStore from "@/store/pbStore";
import { useInfiniteScroll } from "./useInfiniteScroll";
import { TFeed } from "@/types/feed";

const useFeed = () => {
  const pb = pbStore((state) => state.pb);

  const newFeeds = () => {
    return useInfiniteScroll<TFeed>({
      key: "newFeed",
      collection: "feed",
      limit: 5,
      filters: {
        sort: "-created",
        expand: "writer, writer.follower, like, bookmark",
      },
    });
  };

  return {
    newFeeds,
  };
};

export default useFeed;
