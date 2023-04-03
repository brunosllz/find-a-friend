import { Pet, PetProps } from '@/application/entities/pet'

type Override = Partial<PetProps>

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
      orgId: 'org-id-example',
      ...override,
    },
    id,
  )
}
