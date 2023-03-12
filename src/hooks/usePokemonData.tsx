import {useQuery} from 'react-query';
import {fetchAllPokemon} from 'api';

export const usePokemonData = (page: number = 1, pageSize: number = 12) => {
  return useQuery(
    ['all pokemon data', page, pageSize],
    async () => await fetchAllPokemon(page, pageSize),
  );
};
