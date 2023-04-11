'use client'

import logo from '@/assets/logo-secondary.svg'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  CornersOut,
  Lightning,
  WarningCircle,
  WhatsappLogo,
} from 'phosphor-react'

interface PetDetailsProps {
  params: {
    id: string
  }
}

export default function PetDetails({ params }: PetDetailsProps) {
  return (
    <div className="bg-[#FDECED] h-screen">
      <aside className="fixed bg-[#F15156] h-screen flex flex-col justify-between px-6 py-8">
        <Image src={logo} width={45} height={45} alt="" />

        <button>
          <ArrowLeft size={24} />
        </button>
      </aside>

      <main>
        <section>
          <Image />

          <nav>
            <Image />
            <Image />
            <Image />
          </nav>
        </section>

        <section>
          <h1>Alfredo</h1>
          <p>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </p>

          <div>
            <div>
              <Lightning size={20} />
              <Lightning size={20} />
              <Lightning size={20} />
              <Lightning size={20} />
              <Lightning size={20} />
            </div>
            <div>
              <CornersOut size={20} />
              Ambiente amplo
            </div>

            <div>
              <div />
              <div />
              <div />
              Pequenino
            </div>
          </div>

          <div>
            <div>Maps</div>

            <span>Ver rotas no Google Maps</span>
          </div>
        </section>

        <section>
          <div>
            <Image src={logo} width={45} height={45} alt="" />
          </div>

          <div>
            <strong>Seu Cãopanheiro</strong>
            <span>Rua do meio, 123 , Boa viagem, Recife - PE </span>

            <div>
              <WhatsappLogo size={24} />

              <span>81 1234.4567</span>
            </div>
          </div>
        </section>

        <section>
          <h2>Requesitos para adoção</h2>
          <ul>
            <li>
              <WarningCircle size={24} />
              <span>Local grande para o animal correr e brincar.</span>
            </li>
            <li>
              <WarningCircle size={24} />
              <span>Proibido apartamento</span>
            </li>
            <li>
              <WarningCircle size={24} />
              <span>Ambiente frio, pois possui muito pelo.</span>
            </li>
            <li>
              <WarningCircle size={24} />
              <span>Cão com intolerância a lactose.</span>
            </li>
          </ul>
        </section>

        <button>
          <WhatsappLogo />
          Entrar em contato
        </button>
      </main>
    </div>
  )
}
