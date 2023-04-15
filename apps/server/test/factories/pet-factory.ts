import { Pet, PetProps } from '@/application/entities/pet'
import { PetPhoto } from '@/application/entities/pet-photo'
import { Replace } from '@/application/helpers/Replace'

type Override = Partial<
  Replace<PetProps, { photos: Omit<PetPhoto, 'petId' | 'id'>[] | null }>
>

export function MakePet(override: Override = {}, id?: string) {
  return new Pet(
    {
      name: 'unnamed pet',
      age: 'elderly',
      city: 'any where',
      description: 'description pet example',
      energy: 5,
      independence: 'high',
      photos: [
        { url: 'http://example.com/photo1.png' },
        { url: 'http://example.com/photo2.png' },
      ],
      size: 'big',
      type: 'dog',
      ...override,
    },
    id,
  )
}
