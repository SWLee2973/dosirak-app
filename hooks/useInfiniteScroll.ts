import pbStore from "@/store/pbStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import _ from "lodash";
import { RecordListOptions } from "pocketbase";
import { useCallback, useMemo, useState } from "react";

type Params = {
  key: string;
  collection: string;
  limit?: number;
  filters?: RecordListOptions;
};

export const useInfiniteScroll = <T = unknown>({
  key,
  collection,
  limit = 10,
  filters,
}: Params) => {
  const pb = pbStore((state) => state.pb);
  const queryKey = [
    key,
    ..._.values<string | string[]>(
      _.omitBy(filters || {}, (c) => Boolean(c) && !_.isEmpty),
    ),
  ].filter((c) => Boolean(c) && !_.isEmpty(c));

  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryFn = async ({ pageParam = 1 }) => {
    const response = await pb
      ?.collection(collection)
      .getList(pageParam, limit, filters);

    if (response) {
      return {
        data: response.items as T[],
        nextPage: pageParam + 1,
      };
    }

    return {
      data: [] as T[],
      nextPage: 0,
    };
  };

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam: 1,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      if (lastPage.data.length < limit) {
        return undefined;
      }

      return lastPageParam + 1;
    },
    getPreviousPageParam: (_, __, firstPageParam) => {
      if (firstPageParam === 1) {
        return undefined;
      }

      return firstPageParam - 1;
    },
  });

  const loadNext = useCallback(() => {
    hasNextPage && fetchNextPage();
  }, [fetchNextPage, hasNextPage]);

  const onRefresh = useCallback(() => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      refetch()
        .then(() => setIsRefreshing(false))
        .catch(() => setIsRefreshing(false));
    }
  }, [isRefreshing, refetch]);

  const flattenData = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data?.pages]);

  return {
    data: flattenData,
    onEndReached: loadNext,
    isLoading,
    isRefreshing,
    onRefresh,
    isFetchingNextPage,
  };
};
