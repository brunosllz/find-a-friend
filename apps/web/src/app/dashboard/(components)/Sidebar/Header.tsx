'use client'

import { useForm } from 'react-hook-form'
import { BaseLocationValue } from '@/components/SearchPetsForRegionForm'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

import { SelectInput } from '@/components/SelectInput'
import Image from 'next/image'

import { MagnifyingGlass } from 'phosphor-react'
import logo from '@/assets/logo-secondary.svg'

interface HeaderProps {
  states: BaseLocationValue[]
  citySelected: string
}

export function Header({ states, citySelected }: HeaderProps) {
  const searchParams = useSearchParams()
  const selectedState = searchParams.get('state')

  const { register, control, watch, setValue } = useForm({
    defaultValues: {
      state: selectedState,
      city: citySelected,
    },
  })

  const state = watch('state')

  // TODO: transform this query in a custom hook
  async function getCities() {
    const { data } = await api.get<Array<{ id: string; name: string }>>(
      `/location/${state}/cities`,
    )

    return data.map((item) => {
      return {
        id: item.id,
        value: item.name,
        placeholder: item.name,
      }
    })
  }

  const { data: cities, isLoading } = useQuery<Array<BaseLocationValue>>(
    ['cities', state],
    getCities,
    {
      onSuccess(data) {
        const stateFilterIsSelected = data.find(
          (item) => item.value === citySelected,
        )

        if (!stateFilterIsSelected) {
          setValue('city', data[0].value)
        }
      },
    },
  )

  return (
    <header className="bg-[#E44449] w-full flex flex-col gap-6 pl-14 pr-10 pt-20 pb-6 h-[230px]">
      <Image src={logo} width={46} height={46} alt="find a friend" />

      <form className="flex gap-3">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex flex-1 gap-4">
            <div className="max-w-[56px]">
              <SelectInput
                control={control as any}
                options={states}
                {...register('state')}
              />
            </div>

            <SelectInput
              control={control as any}
              options={cities ?? []}
              isLoading={isLoading}
              {...register('city')}
            />
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
      </form>
    </header>
  )
}
