'use client'

// TODO: Refactor this component, apply composition pattern

import { forwardRef } from 'react'
import { useController, Control, Path, FieldValues } from 'react-hook-form'
import clsx from 'clsx'

import * as Select from '@radix-ui/react-select'

import { CaretDown, CaretUp, Check, CircleNotch } from 'phosphor-react'

type Option = {
  id?: string
  value: string | number
  placeholder: string
}

interface SelectInputProps<T extends FieldValues = FieldValues>
  extends Select.SelectProps {
  name: Path<T>
  control: Control<T>
  options: Option[]
  isLoading?: boolean
}

export const SelectInput = forwardRef<
  HTMLButtonElement,
  SelectInputProps<FieldValues>
>(
  <T extends FieldValues = FieldValues>(
    { control, name, options, isLoading, ...rest }: SelectInputProps<T>,
    ref: any,
  ) => {
    const {
      field: { value, onChange },
    } = useController({ name, control })

    return (
      <Select.Root value={value} onValueChange={onChange} {...rest}>
        <Select.Trigger
          ref={ref}
          className={clsx(
            'inline-flex select-none items-center justify-center rounded-lg px-4 py-2 font-extrabold w-full h-14',
            'bg-[#E44449]',
            'hover:bg-[#F75F64] hover:ring-white',
            'focus:outline-none focus-visible:ring-1 focus-visible:ring-white',
          )}
        >
          {isLoading ? (
            <CircleNotch size={16} weight="bold" className="animate-spin" />
          ) : (
            <>
              <Select.Value />
              <Select.Icon className="ml-1">
                <CaretDown />
              </Select.Icon>
            </>
          )}
        </Select.Trigger>
        <Select.Content>
          <Select.ScrollUpButton className="flex items-center justify-center text-gray-700">
            <CaretUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="bg-white p-2 rounded-lg shadow-lg">
            <Select.Group>
              {options.map((item) => (
                <Select.Item
                  key={item.id ?? item.value}
                  value={String(item.value)}
                  className={clsx(
                    'relative flex items-center px-7 py-2 rounded-md text-gray-700 focus:bg-gray-200',
                    'radix-disabled:opacity-50',
                    'focus:outline-none select-none',
                  )}
                >
                  <Select.ItemText>{item.placeholder}</Select.ItemText>
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <Check weight="bold" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center text-gray-700">
            <CaretDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Root>
    )
  },
)

SelectInput.displayName = 'SelectInput'
