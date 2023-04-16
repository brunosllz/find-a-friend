'use client'

import { WhatsappLogo } from 'phosphor-react'

export function PhoneBanner() {
  return (
    <div className="flex bg-[#F3F5F7] py-3 px-6 gap-2 rounded-lg ml-20">
      <WhatsappLogo size={24} weight="fill" />

      <span className="text-lg">81 1234.4567</span>
    </div>
  )
}
