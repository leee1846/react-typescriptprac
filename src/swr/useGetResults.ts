import useSWR from 'swr';
import fetcher from '../utils/fetcher';

type DataType = [string, number, number][];

const useGetResults = (): {
  data: DataType | undefined;
  error: any;
  loading: boolean;
} => {
  const { data, error } = useSWR('/result', fetcher);

  return { data, error, loading: !data && !error };
};

export default useGetResults;
