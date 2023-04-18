'use client'

import { WhatsappLogo } from 'phosphor-react'

interface PhoneBanerProps {
  number: string
}

export function PhoneBanner({ number }: PhoneBanerProps) {
  return (
    <div className="flex bg-[#F3F5F7] py-3 px-6 gap-2 rounded-lg ml-20">
      <WhatsappLogo size={24} weight="fill" />

      <span className="text-lg">{number}</span>
    </div>
  )
}
