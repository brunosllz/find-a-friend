import { Suspense } from 'react'
import { parseRouteParams } from '@/utils/parse-route-params'

import { Sidebar } from '../../(components)/Sidebar'
import { Header } from '../../(components)/Header'
import { Pet, PetGallery } from '../../(components)/PetGallery'

interface DashboardProps {
  params: {
    city: string
  }
}

export default async function Dashboard({ params }: DashboardProps) {
  const { city } = parseRouteParams(params)

  const response = await fetch(`http://localhost:3333/pets/${city}`)
  const { count }: { pets: Pet[]; count: number } = await response
    .json()
    .then((data) => data)

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-[#FDECED] h-screen flex flex-[1_1_auto] overflow-hidden pl-[392px]">
        <div className="flex flex-[1_1_auto] overflow-hidden">
          <div className="flex flex-[1_1_auto] flex-col h-full overflow-auto pl-8 pr-[112px]">
            <Header amountPets={count} />

            <Suspense fallback={<div>Loading...</div>}>
              {/* @ts-expect-error Async Component */}
              <PetGallery city={city} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
