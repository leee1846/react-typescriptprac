import customAxios from './customAxios';

const fetcher = (url: string): Promise<any> =>
  customAxios({
    method: 'get',
    url,
  })
    .then((response) => response.data)
    .catch((error) => {
      alert(error);
    });

export default fetcher;
