'use client'

import { api } from '@/lib/axios'
import { useForm } from 'react-hook-form'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { SelectInput } from './SelectInput'

import { MagnifyingGlass } from 'phosphor-react'

interface BaseValue {
  id: string
  value: string
  placeholder: string
}

interface SearchPetsForRegionFormProps {
  states: BaseValue[]
  cities: BaseValue[]
}

export function SearchPetsForRegionForm({
  states,
  cities,
}: SearchPetsForRegionFormProps) {
  const { handleSubmit, control, register, watch, setValue } = useForm<{
    state: string
    city: string
  }>({
    defaultValues: {
      state: states[0].value,
      city: cities[0].value,
    },
  })

  const router = useRouter()

  // TODO: Change this query in custom hook
  async function getCities() {
    const { data } = await api.get<Array<{ id: string; name: string }>>(
      `/location/${watch('state')}/cities`,
    )

    return data.map((item) => {
      return {
        id: item.id,
        value: item.name,
        placeholder: item.name,
      }
    })
  }

  const { data, isFetchedAfterMount } = useQuery<Array<BaseValue>>(
    ['cities', watch('state')],
    getCities,
    {
      initialData: cities,
      onSuccess(data) {
        setValue('city', data[0].value)
      },
    },
  )

  // TODO: added type and validation of data receive on form
  function handleSearchPetsForRegion(data: any) {
    router.push(`/dashboard/${data.city}/pets`)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchPetsForRegion)}
      className="flex items-end gap-3 justify-between w-full"
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <span className="block">Busque um amigo:</span>
        <div className="flex flex-1 gap-4">
          <div className="max-w-[56px]">
            <SelectInput
              control={control as any}
              disabled={!states}
              options={states}
              {...register('state')}
            />
          </div>

          <SelectInput
            control={control as any}
            disabled={!isFetchedAfterMount}
            options={data!}
            isLoading={!isFetchedAfterMount}
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
  )
}
