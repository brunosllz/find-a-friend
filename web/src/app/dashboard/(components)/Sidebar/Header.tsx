'use client'

import { useForm } from 'react-hook-form'

import { SelectInput } from '@/components/SelectInput'
import Image from 'next/image'

import { MagnifyingGlass } from 'phosphor-react'
import logo from '@/assets/logo-secondary.svg'

export function Header() {
  const { register, control } = useForm()

  return (
    <header className="bg-[#E44449] w-full flex flex-col gap-6 pl-14 pr-10 pt-20 pb-6">
      <Image src={logo} width={46} height={46} alt="find a friend" />

      <div className="flex gap-3">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-1 gap-4">
            <div className="max-w-[56px]">
              <SelectInput
                control={control}
                options={[]}
                {...register('state')}
              />
            </div>

            <SelectInput control={control} options={[]} {...register('city')} />
          </div>
        </div>

        <div className="min-w-14">
          <button
            type="submit"
            className="h-14 w-14 flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-lg text-gray-900"
          >
            <MagnifyingGlass size={24} weight="bold" />
          </button>
        </div>
      </div>
    </header>
  )
}
