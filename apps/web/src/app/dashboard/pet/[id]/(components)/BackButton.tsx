'use client'

import { ArrowLeft } from 'phosphor-react'
import { useRouter } from 'next/navigation'

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="p-3 bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-2xl text-[#0D3B66]"
    >
      <ArrowLeft size={24} weight="bold" />
    </button>
  )
}
