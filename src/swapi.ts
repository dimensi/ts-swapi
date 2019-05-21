import { http } from './api';
import PaginatedData from './paginatedData';
import { Film } from './types/Film';
import { People } from './types/People';
import { Planet } from './types/Planet';
import { Species } from './types/Species';
import { Starship } from './types/Starship';
import { Vehicle } from './types/Vehicle';

const getResource = async <T>(resource: string, id?: number): Promise<T> => {
  try {
    const response = await http<T>(id ? `${resource}/${id}` : `${resource}`);
    return await response.data;
  } catch (error) {
    throw error;
  }
};

const searchResource = async <T>(resource: string, searchTerm: string): Promise<PaginatedData<T>> => {
  try {
    const response = await http<PaginatedData<T>>(`${resource}?search=${searchTerm}`);
    return await new PaginatedData<T>(response.data);
  } catch (error) {
    throw error;
  }
};

export const Swapi = {
  films: {
    fetch: (id?: number) => getResource<Film>('films', id),
    search: (searchTerm: string) => searchResource<Film>('films', searchTerm),
  },
  people: {
    fetch: (id?: number) => getResource<People>('people', id),
    search: (searchTerm: string) => searchResource<People>('people', searchTerm),
  },
  planets: {
    fetch: (id?: number) => getResource<Planet>('planets', id),
    search: (searchTerm: string) => searchResource<Planet>('planets', searchTerm),
  },
  species: {
    fetch: (id?: number) => getResource<Species>('species', id),
    search: (searchTerm: string) => searchResource<Species>('species', searchTerm),
  },
  starships: {
    fetch: (id?: number) => getResource<Starship>('starships', id),
    search: (searchTerm: string) => searchResource<Starship>('starships', searchTerm),
  },
  vehicles: {
    fetch: (id?: number) => getResource<Vehicle>('vehicles', id),
    search: (searchTerm: string) => searchResource<Vehicle>('vehicles', searchTerm),
  },
};
