import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';
import { getCharactersPaginated } from './api';
import { charactersPagesTransform } from './selectors';
import { Characters, QueryTypes } from './types';

export const useInfiniteCharacters = (options = {}): UseInfiniteQueryResult<Characters> => {
  return useInfiniteQuery(QueryTypes.CHARACTERS, ({ pageParam = 1 }) => getCharactersPaginated(pageParam), {
    getNextPageParam: (lastPage) => lastPage.pageInfo.next,
    select: charactersPagesTransform,
    ...options,
  });
};
