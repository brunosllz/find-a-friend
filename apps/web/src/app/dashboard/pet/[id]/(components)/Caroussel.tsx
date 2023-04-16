'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

interface CarouselProps {
  photos: {
    id: string
    url: string
  }[]
}

export function Carousel({ photos }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleSelectedImage(index: number) {
    setCurrentIndex(index)
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full h-[336px] overflow-hidden flex items-center justify-center">
        <Image
          src={photos[currentIndex].url}
          width={274}
          height={336}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <ul className="grid grid-cols-6 gap-4 px-20">
        {photos.map((photo: any, i) => {
          return (
            <li
              key={photo.id}
              onClick={() => handleSelectedImage(i)}
              className={clsx(
                'w-full h-[80px] overflow-hidden flex items-center justify-center rounded-[16px] cursor-pointer transition-colors',
                {
                  'ring-4 ring-[#0D3B66]': currentIndex === i,
                },
              )}
            >
              <Image
                src={photo.url}
                width={274}
                height={135}
                alt=""
                className="h-full w-full object-cover"
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
