import pbStore from "@/store/pbStore";
import { TGroup } from "@/types/group";
import { useQuery } from "@tanstack/react-query";

export const usePopularGroup = () => {
  const pb = pbStore((state) => state.pb);

  const fetchPopularGroup = async (): Promise<TGroup[]> => {
    const res = await pb?.collection("groups_popular").getList(1, 5, {
      sort: "-i_like_it",
    });

    console.log("res : ", res);

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
