import axios, { AxiosRequestConfig } from 'axios';

export default async function fetchData(url: string, params: AxiosRequestConfig) {
  return axios({
    timeout: 10000,
    baseURL: 'http://localhost:8000',
    url,
    ...params,
  });
}
