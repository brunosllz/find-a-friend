import Image from 'next/image'
import { SearchPetsForRegionForm } from '@/components/SearchPetsForRegionForm'

import logo from '../assets/logo.svg'
import dogsImage from '../assets/dogs-image.svg'

export default async function Home() {
  const statesResponse = await fetch('http://localhost:3333/location/states', {
    method: 'GET',
    next: { revalidate: 60 * 60 * 24 },
  })

  const states = await statesResponse
    .json()
    .then((data: Array<{ id: string; name: string; acronym: string }>) =>
      data.map((item) => {
        return {
          id: item.id,
          value: item.acronym,
        }
      }),
    )

  const citiesResponse = await fetch(
    `http://localhost:3333/location/${states[0].value}/cities`,
    {
      method: 'GET',
      next: { revalidate: 60 * 60 * 24 },
    },
  )

  const cities = await citiesResponse
    .json()
    .then((data: Array<{ id: string; name: string }>) =>
      data.map((item) => {
        return {
          id: item.id,
          value: item.name,
        }
      }),
    )

  return (
    <main className="flex flex-col justify-center items-center h-full w-full max-w-[1215px] text-white mx-auto">
      <header className="w-full ">
        <Image src={logo} width={215} height={56} alt="find a friend" />
      </header>
      <div className="flex w-full justify-between mt-7">
        <div className="max-w-[487px] flex flex-col justify-end">
          <strong className="text-7xl text-left font-extrabold">
            Leve <br /> a felicidade para o seu lar
          </strong>
        </div>

        <Image
          src={dogsImage}
          width={592}
          height={305}
          alt="find a friend"
          quality={100}
          priority
        />
      </div>

      <footer className="grid grid-cols-2 gap mt-28 w-full">
        <div className="max-w-[407px]">
          <span className="text-xl text-left font-semibold ">
            Encontre o animal de estimação ideal para seu estilo de vida!
          </span>
        </div>
        <SearchPetsForRegionForm states={states} cities={cities} />
      </footer>
    </main>
  )
}
