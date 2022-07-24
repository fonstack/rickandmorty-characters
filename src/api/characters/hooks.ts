import { useInfiniteQuery, UseInfiniteQueryResult, useQuery, UseQueryResult } from 'react-query';
import { getCharactersByIds, getCharactersPaginated } from './api';
import { charactersPagesTransform, characterTransform } from './selectors';
import { Character, Characters, QueryTypes } from './types';

const MAX_PAGES_TO_FETCH = 10;

export const useInfiniteCharacters = (statusFilter: string): UseInfiniteQueryResult<Characters> => {
  return useInfiniteQuery(
    [QueryTypes.CHARACTERS, statusFilter],
    ({ pageParam = 1 }) => getCharactersPaginated(pageParam, statusFilter),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.pageInfo.next && lastPage.pageInfo.next < MAX_PAGES_TO_FETCH) {
          return lastPage.pageInfo.next;
        }
        return null;
      },
      select: charactersPagesTransform,
    }
  );
};

export const useCharactersByIds = (ids: number[]): UseQueryResult<Character[]> => {
  return useQuery([QueryTypes.CHARACTERS_BY_IDS, ids.join(',')], () => getCharactersByIds(ids), {
    select: (data) => data.map(characterTransform),
    keepPreviousData: true,
  });
};
