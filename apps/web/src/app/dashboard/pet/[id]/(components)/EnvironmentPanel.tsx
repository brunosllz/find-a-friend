'use client'

import { CornersOut } from 'phosphor-react'

export function EnvironmentPanel() {
  return (
    <div className="flex flex-col w-full h-24 items-start justify-between p-4 ring-2 ring-[#0D3B66] rounded-2xl text-[#0D3B66] text-lg font-semibold ring-opacity-10">
      <CornersOut size={24} />
      Ambiente amplo
    </div>
  )
}
