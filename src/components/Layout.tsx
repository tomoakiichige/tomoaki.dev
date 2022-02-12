import Link from 'next/link'
import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { Head } from './Head'

type Props = {
  title: string
  children: ReactNode
}
export const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head title={title} />
      <header className="flex justify-center px-4 h-16">
        <div className="flex items-center w-full max-w-screen-md">
          <div className="text-lg font-bold">
            <Link href="/">
              <a>tomoaki.dev</a>
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  )
}
