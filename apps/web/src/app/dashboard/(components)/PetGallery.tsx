import { PetCard } from './PetCard'

export interface Pet {
  id: string
  name: string
  energy: number
  photos: {
    id: string
    url: string
  }[]
}

interface PetGalleryProps {
  city: string
}

export async function PetGallery({ city }: PetGalleryProps) {
  const response = await fetch(`http://localhost:3333/pets/${city}`)
  const pets: Pet[] = await response.json().then((data) => data)

  return (
    <div className="grid grid-cols-3 gap-8">
      {pets.map((pet) => {
        return <PetCard key={pet.id} data={pet} />
      })}
    </div>
  )
}
