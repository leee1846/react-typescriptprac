import customAxios from './axios';

const fetcher = (url: string): Promise<any> =>
  customAxios({
    method: 'get',
    url,
  }).then((response) => response.data);

export default fetcher;
