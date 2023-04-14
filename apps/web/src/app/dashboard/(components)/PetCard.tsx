import Image from 'next/image'
import logo from '@/assets/logo-secondary.svg'
import { Pet } from './PetGallery'
import Link from 'next/link'

interface PetCardProps {
  data: Pet
}

export function PetCard({ data }: PetCardProps) {
  return (
    <li className="bg-white rounded-[20px] p-1 relative hover:bg-[#0D3B66] transition-colors group cursor-pointer">
      <Link href={`http://localhost:3000/dashboard/pet/${data.id}`}>
        <div className="w-full h-[135px] overflow-hidden  flex items-center justify-center">
          <Image
            src={'https://www.github.com/brunosllz.png'}
            width={274}
            height={135}
            alt=""
            className="h-full w-full object-cover mx-auto"
          />
        </div>

        {/* TODO: transform this avatar logo in a component */}
        <div className="absolute left-1/2 top-[52%] -translate-x-1/2 bg-yellow-500 p-4 rounded-xl ring-4 ring-white group-hover:ring-[#0D3B66] transition-colors">
          <Image src={logo} width={16} height={16} alt="" />
        </div>

        <footer className="pb-[18px] pt-8 flex items-center justify-center">
          <strong className="text-[#0D3B66] group-hover:text-white font-bold transition-colors">
            {data.name}
          </strong>
        </footer>
      </Link>
    </li>
  )
}
