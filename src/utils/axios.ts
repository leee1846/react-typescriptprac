import axios from 'axios';

const defaultUrl = process.env.REACT_APP_API_URL;

const customAxios = axios.create({
  baseURL: defaultUrl,
});

export default customAxios;
