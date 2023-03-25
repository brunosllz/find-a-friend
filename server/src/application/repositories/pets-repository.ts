import { Pet } from '../entities/pet'
import { SearchPetsParams } from '../use-cases/search-pets'

export type QueryParams = SearchPetsParams

export interface PetsRepository {
  create(pet: Pet): Promise<Pet>
  findMany(
    page: number,
    city: string,
    queryParams?: QueryParams,
  ): Promise<Pet[]>
}
