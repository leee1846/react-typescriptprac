import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { ResultListType } from '../types/resultTypes';

const useGetResults = (): {
  data: ResultListType | [];
  error: any;
} => {
  let resultList = [] as ResultListType | [];

  const { data, error } = useSWR('/result', fetcher);

  if (data) {
    data.forEach((item: [string, number, number]) => {
      resultList = [
        ...resultList,
        { name: item[0], foxtrot: item[1], golf: item[2] },
      ];
    });
  }

  return { data: resultList, error };
};

export default useGetResults;
