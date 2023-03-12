// https://api.pokemontcg.io/v2/cards
import axios, {AxiosError} from 'axios';
import { Pokemon } from "types/pokemon/types";
import { number } from "yup";

// axios.interceptors.request.use(function (config) {
//   config.headers = {
//     "x-api-key": "a75b6212-ff16-48c3-87de-f75d31f186ad\n"
//   }
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


interface ResponseData {
  count: number;
  pageSize: number;
  page: number;
  totalCount: number;
  data: Pokemon[];
}

export const fetchAllPokemon = async (
  page: number = 1,
  pageSize: number = 12,
) => {
  try {
    const response = await axios.get<ResponseData>(
      `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`,
    );

    return response.data.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.message);
    }
  }
};
