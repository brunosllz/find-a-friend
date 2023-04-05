'use client'

import { useForm } from 'react-hook-form'
import { age, energy, independence, size } from '@/utils/options-filter-pet'
import { Replace } from '@/helpers/Replace'
import { z } from 'zod'

import { SelectInput } from '@/components/SelectInput'

const searchPetSchema = z.object({
  age: z.enum(['cub', 'adolescent', 'elderly']),
  energy: z.coerce.number().min(1).max(5),
  size: z.enum(['small', 'medium', 'big']),
  independence: z.enum(['low', 'medium', 'hight']),
})

type SearchPet = z.infer<typeof searchPetSchema>

export function SearchPetForm() {
  const { register, control } = useForm<Replace<SearchPet, { energy: string }>>(
    {
      defaultValues: {
        age: 'cub',
        energy: '1',
        independence: 'low',
        size: 'small',
      },
    },
  )

  return (
    <form className="flex flex-col gap-4 w-full">
      <label className="flex flex-col gap-2">
        Idade
        <SelectInput
          control={control as any}
          options={age}
          {...register('age')}
        />
      </label>

      <label className="flex flex-col gap-2 ">
        Nível de Energia
        <SelectInput
          control={control as any}
          options={energy}
          {...register('energy')}
        />
      </label>

      <label className="flex flex-col gap-2 ">
        Porte do animal
        <SelectInput
          control={control as any}
          options={size}
          {...register('size')}
        />
      </label>

      <label className="flex flex-col gap-2 ">
        Nível de independência
        <SelectInput
          control={control as any}
          options={independence}
          {...register('independence')}
        />
      </label>
    </form>
  )
}
