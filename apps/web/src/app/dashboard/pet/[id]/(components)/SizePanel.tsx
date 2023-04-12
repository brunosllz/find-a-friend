'use client'

import clsx from 'clsx'

export function SizePanel() {
  return (
    <div className="flex flex-col w-full h-24 items-start justify-between p-4 ring-2 ring-[#0D3B66] rounded-2xl text-[#0D3B66] text-lg font-semibold ring-opacity-10">
      <div className="flex gap-1 pt-[6px]">
        {Array.from({ length: 3 }, (_, i) => {
          return (
            <div
              key={i}
              className={clsx('h-3 w-3 rounded-full bg-[#0D3B66]', {})}
            />
          )
        })}
      </div>
      Pequenino
    </div>
  )
}
