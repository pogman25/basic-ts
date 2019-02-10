import axios, { AxiosRequestConfig } from 'axios';

export default async function fetchData(url: string, params: AxiosRequestConfig) {
  return axios({
    timeout: 10000,
    baseURL: 'https://swapi.co/api/',
    url,
    ...params,
  });
}
