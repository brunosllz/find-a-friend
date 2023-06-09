import { SearchPetsParams } from '../entities/types/pet'
import { PetDTO } from './dto/pet-dto'

export type QueryParams = SearchPetsParams

export interface PetsRepository {
  create(pet: PetDTO): Promise<PetDTO>
  findById(id: string): Promise<PetDTO | null>
  findMany(
    page: number,
    city: string,
    queryParams?: QueryParams,
  ): Promise<{ pets: PetDTO[]; count: number }>
}
