'use client'

import { useState } from 'react'
import clsx from 'clsx'

interface SizePanelProps {
  size: 'small' | 'medium' | 'big'
}

export function SizePanel({ size }: SizePanelProps) {
  const [currentSize] = useState<{
    size: number
    description: string
  }>(() => {
    if (size === 'small') {
      return {
        size: 0,
        description: 'Pequenino',
      }
    }

    if (size === 'medium') {
      return {
        size: 1,
        description: 'Mediano',
      }
    }

    return {
      size: 2,
      description: 'Grande',
    }
  })

  return (
    <div className="flex flex-col w-full h-24 items-start justify-between p-4 ring-2 ring-[#0D3B66] rounded-2xl text-[#0D3B66] text-lg font-semibold ring-opacity-10">
      <div className="flex gap-1 pt-[6px]">
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <div
              key={i}
              className={clsx('h-3 w-3 rounded-full bg-[#0D3B66]', {
                'bg-[#CFD8E0]': currentSize.size < i,
              })}
            />
          )
        })}
      </div>
      {currentSize.description}
    </div>
  )
}
