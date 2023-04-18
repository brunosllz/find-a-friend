import Image from 'next/image'
import { EnergyPanel } from './(components)/EnergyPanel'
import { EnvironmentPanel } from './(components)/EnvironmentPanel'
import { SizePanel } from './(components)/SizePanel'
import { PhoneBanner } from './(components)/PhoneBanner'
import { Carousel } from './(components)/Caroussel'
import { BackButton } from './(components)/BackButton'

import logo from '@/assets/logo-secondary.svg'

interface PetDetailsProps {
  params: {
    id: string
  }
}

export default async function PetDetails({ params }: PetDetailsProps) {
  const petResponse = await fetch(`http://localhost:3333/pets/${params.id}`)
  // TODO: Create a interface for identify a pet return
  const pet: {
    id: string
    name: string
    description: string
    city: string
    age: 'cub' | 'adolescent' | 'elderly'
    energy: string
    size: 'small' | 'medium' | 'big'
    independence: 'low' | 'medium' | 'high'
    type: string
    organization: {
      id: string
      name: string
      address: string
      cep: string
      phoneNumber: string
    }
  } = await petResponse.json().then((data) => data)

  const photosResponse = await fetch(
    `http://localhost:3333/pets/${params.id}/photos`,
  )
  const photos: { id: string; url: string }[] = await photosResponse
    .json()
    .then((data) => data)

  return (
    <div className="flex">
      <aside className="fixed bg-[#F15156] h-screen flex flex-col justify-between px-6 py-8">
        <Image src={logo} width={45} height={45} alt="" />
        <BackButton />
      </aside>

      <div className="min-h-screen flex-[1_1_auto] flex-col bg-[#FDECED] py-20 pl-[95px]">
        <main className="flex flex-[1_1_auto] flex-col min-h-full w-full max-w-[704px] mx-auto bg-white text-[#0D3B66] rounded-3xl overflow-hidden">
          <Carousel photos={photos} />

          <section className="flex flex-col gap-12 py-10 px-20">
            <div className="flex flex-col gap-6">
              <h1 className="text-5xl font-extrabold capitalize">{pet.name}</h1>
              <p className="text-lg font-semibold">{pet.description}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <EnergyPanel energyAmount={Number(pet.energy)} />
              <EnvironmentPanel />
              <SizePanel size={pet.size} />
            </div>

            <div>
              <div>Maps</div>

              <span>Ver rotas no Google Maps</span>
            </div>
          </section>

          <section className="flex flex-col gap-4 items-start px-20 py-10 border-t border-b border-[#D3E2E5]">
            <div className="flex  gap-4">
              <div className="bg-[#F27006] p-4 rounded-xl w-16 h-16 flex items-center justify-center ring-4 ring-white group-hover:ring-[#0D3B66] transition-colors">
                <Image src={logo} width={28} height={28} alt="" />
              </div>

              <div className="flex flex-col">
                <strong className="text-3xl font-bold capitalize">
                  {pet.organization.name}
                </strong>
                <span className="font-semibold capitalize">
                  {pet.organization.address}
                </span>
              </div>
            </div>

            <PhoneBanner number={pet.organization.phoneNumber} />
          </section>

          {/* <section className="flex flex-col gap-10 py-10 px-20 border-b border-[#D3E2E5]">
            <strong className="text-3xl font-bold">
              Requesitos para adoção
            </strong>
            <ul className="w-full flex flex-col gap-3">
              <li className="flex gap-3 items-center px-10 py-4 bg-[#FFF6F6] text-lg text-[#F15156] rounded-lg ring-1 ring-[#F15156]">
                <WarningCircle size={24} />
                <span>Local grande para o animal correr e brincar.</span>
              </li>
              <li className="flex gap-3 items-center px-10 py-4 bg-[#FFF6F6] text-lg text-[#F15156] rounded-lg ring-1 ring-[#F15156]">
                <WarningCircle size={24} />
                <span>Proibido apartamento.</span>
              </li>
              <li className="flex gap-3 items-center px-10 py-4 bg-[#FFF6F6] text-lg text-[#F15156] rounded-lg ring-1 ring-[#F15156]">
                <WarningCircle size={24} />
                <span>Ambiente frio, pois possui muito pelo.</span>
              </li>
              <li className="flex gap-3 items-center px-10 py-4 bg-[#FFF6F6] text-lg text-[#F15156] rounded-lg ring-1 ring-[#F15156]">
                <WarningCircle size={24} />
                <span>Local grande para o animal correr e brincar.</span>
              </li>
              <li className="flex gap-3 items-center px-10 py-4 bg-[#FFF6F6] text-lg text-[#F15156] rounded-lg ring-1 ring-[#F15156]">
                <WarningCircle size={24} />
                <span>Cão com intolerância a lactose.</span>
              </li>
            </ul>
          </section> */}

          {/* <footer className="w-full pt-10 pb-20 px-20">
            <button className="flex py-5 bg-[#3CDC8C] text-white items-center justify-center gap-4 rounded-2xl w-full">
              <WhatsappLogo size={24} />
              Entrar em contato
            </button>
          </footer> */}
        </main>
      </div>
    </div>
  )
}
