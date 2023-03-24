import { Pet, PetProps } from '@/application/entities/pet'

type Override = Partial<PetProps>

export function MakePet(override: Override = {}, id?: string) {
  return new Pet(
    {
      name: 'princes',
      age: 'elderly',
      city: 'any where',
      description: 'Is a pet',
      energy: 5,
      independence: 'high',
      photo: 'https://www.pet-images.com/image.png',
      size: 'big',
      type: 'dog',
      orgId: 'org-id-example',
      ...override,
    },
    id,
  )
}
