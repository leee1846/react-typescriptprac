import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { ResultListType } from '../types/resultTypes';

const useGetResults = (): {
  data: ResultListType;
  error: any;
} => {
  const { data, error } = useSWR('/result', fetcher);

  return { data, error };
};

export default useGetResults;
