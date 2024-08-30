import pbStore from "@/store/pbStore";
import { TGroup, TRecommendGroup } from "@/types/group";
import {
  QueryClientContext,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { RecordModel } from "pocketbase";
import { useContext, useState } from "react";
import { useInfiniteScroll } from "./useInfiniteScroll";
import dayjs from "dayjs";

const useGroup = () => {
  const pb = pbStore((state) => state.pb);

  const popularGroups = () => {
    const fetchPopularGroup = async (): Promise<TGroup[]> => {
      const res = await pb?.collection("groups_popular").getList(1, 5, {
        sort: "-i_like_it",
      });

      const popularGroup = res?.items.map((item) => ({
        collectionId: item.collectionId,
        id: item.id,
        hashTag: { ...item.hashTag },
        created: item.created,
        i_like_it: item.i_like_it,
        i_participate_it: item.i_participate_it,
        isRecruiting: item.isRecruiting,
        like: item.like,
        participant: item.participant,
        thumbnail: item.thumbnail,
        title: item.title,
        last_upload_time: item.last_upload_time,
      })) as TGroup[];

      return popularGroup;
    };

    const query = {
      queryKey: ["popularGroup"],
      queryFn: fetchPopularGroup,
    };

    const result = useQuery<TGroup[]>(query) ?? ([] as TGroup[]);

    return result;
  };

  const recommendGroups = () => {
    return useInfiniteScroll<TGroup>({
      key: "recommendGroup",
      collection: "groups_popular",
      limit: 5,
    });
  };

  const newGroups = () => {
    return useInfiniteScroll<TGroup>({
      key: "newGroup",
      collection: "groups_popular",
      limit: 5,
      filters: {
        filter: `created > "${dayjs().subtract(1, "year").format("YYYY-MM-DD")}"`,
      },
    });
  };

  return {
    popularGroups,
    recommendGroups,
    newGroups,
  };
};

export default useGroup;
