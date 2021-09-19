import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { ResultSubType } from '../types/resultTypes';
import { setSubListToStorage } from '../utils/result';

const useGetResultSubList = (name: string): { data: ResultSubType } => {
  // storage에 저장되어있지 않다면 fetch
  const sholudFetch = () => {
    const prevList = JSON.parse(
      sessionStorage.getItem(`clickedResult`) || '[]',
    );
    const newItem = prevList.filter((item: string) => item === name);
    if (newItem[0]) return false;
    return true;
  };

  let subList = [] as [] | ResultSubType;
  const { data } = useSWR(`/result/${name}`, sholudFetch() ? fetcher : null);
  if (data && name) {
    setSubListToStorage(name);
    data.forEach((item: [number, number, number]) => {
      subList = [
        ...subList,
        { id: item[0], foxtrot: item[1], golf: item[2], clicked: false },
      ];
    });
  }

  return { data: subList };
};

export default useGetResultSubList;
