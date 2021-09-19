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

  const { data } = useSWR(`/result/${name}`, sholudFetch() ? fetcher : null);
  if (data && name) {
    setSubListToStorage(name);
  }

  return { data };
};

export default useGetResultSubList;
