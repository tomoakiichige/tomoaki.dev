import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type Props = {
  image: string
  title: string
  year: string
  link: string
  children?: ReactNode
}

export const WorkCard = ({ image, title, year, link, children }: Props) => {
  return (
    <Link href={link}>
      <a>
        <div className="group h-full bg-neutral-800 hover:bg-neutral-700 rounded-xl transition-colors">
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl brightness-75 group-hover:brightness-100 transition-[filter]"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg">{title}</h3>
            <p className="text-xs text-neutral-400">{year}</p>
            {children && (
              <p className="mt-1 text-sm text-neutral-300">{children}</p>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}
