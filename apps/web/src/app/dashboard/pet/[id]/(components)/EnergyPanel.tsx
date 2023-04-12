'use client'

import clsx from 'clsx'

import { Lightning } from 'phosphor-react'

interface EnergyPanelProps {
  energyAmount: number
}

export function EnergyPanel({ energyAmount }: EnergyPanelProps) {
  return (
    <div className="flex flex-col w-full h-24 items-start justify-between p-4 ring-2 ring-[#0D3B66] rounded-2xl text-[#0D3B66] text-lg font-semibold ring-opacity-10">
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <Lightning
              key={i}
              size={24}
              className={clsx('text-[#0D3B66]', {
                'opacity-20': energyAmount <= i,
              })}
              weight={energyAmount <= i ? 'fill' : 'bold'}
            />
          )
        })}
      </div>
      Muita energia
    </div>
  )
}
