import { Pet } from '@/application/entities/pet'

export class SearchPetsViewModel {
  static toHTTP(pets: Pet[]) {
    return pets.map((pet) => {
      return {
        id: pet.id,
        name: pet.name,
        energy: pet.energy,
        photo: {
          url: pet.photos ? pet.photos[0].url : null,
        },
      }
    })
  }
}
