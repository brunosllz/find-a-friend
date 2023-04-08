'use client'

import { SelectInput } from '@/components/SelectInput'
import { useForm } from 'react-hook-form'

interface HeaderProps {
  amountPets: number
}

export function Header({ amountPets }: HeaderProps) {
  const { register, control } = useForm()

  return (
    <header className="flex items-end w-full pb-6 h-[230px]">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#0D3B66] ">
          Encontre <span className="font-extrabold">{amountPets} amigos</span>{' '}
          na sua cidade
        </p>

        <div className="w-[210px]">
          <SelectInput
            control={control as any}
            options={[]}
            {...register('petType')}
          />
        </div>
      </div>
    </header>
  )
}
