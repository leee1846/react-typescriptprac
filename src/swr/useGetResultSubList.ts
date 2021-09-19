import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { ResultSubType } from '../types/resultTypes';
import { setSubListToStorage } from '../utils/result';

const useGetResultSubList = (name: string): { data: ResultSubType } => {
  // storage에 저장되어있지 않다면 fetch
  const sholudFetch = () => {
    const savedSubList = sessionStorage.getItem(`${name}`);
    if (!savedSubList) {
      return true;
    }
    return false;
  };

  const { data } = useSWR(`/result/${name}`, sholudFetch() ? fetcher : null);
  if (data && name) {
    setSubListToStorage(name, data);
  }

  return { data };
};

export default useGetResultSubList;
