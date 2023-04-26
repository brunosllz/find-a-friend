import { PetPhotoDTO } from './dto/pet-photo-dto'

export interface PetsPhotosRepository {
  save(petPhotos: Omit<PetPhotoDTO, 'id'>[], petId: string): Promise<void>
  findManyById(petId: string): Promise<PetPhotoDTO[]>
}
