import { PetPhotosDTO } from './dto/pet-photos-dto'

export interface PetsPhotosRepository {
  save(petPhotos: PetPhotosDTO): Promise<void>
  findManyById(petId: string): Promise<PetPhotosDTO>
}
