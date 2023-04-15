import { PetPhotoDTO } from './dto/pet-photo-dto'

export interface PetsPhotosRepository {
  save(petPhotos: PetPhotoDTO[]): Promise<void>
  findManyById(id: string): Promise<PetPhotoDTO[]>
}
