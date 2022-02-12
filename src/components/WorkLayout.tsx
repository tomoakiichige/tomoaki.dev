import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import type { ReactNode } from 'react'

import { Layout } from './Layout'
import { Link } from './Link'

type Meta = {
  title: string
  image: string
  year: string
}

type Props = {
  meta: Meta
  children: ReactNode
}

const components = {
  a: Link,
}

export const WorkLayout = ({ meta, children }: Props) => {
  return (
    <Layout title={meta.title}>
      <div className="px-4">
        <div className="mx-auto w-full max-w-screen-md">
          <header>
            <Image
              src={meta.image}
              alt=""
              width={1440}
              height={810}
              className="rounded-xl"
            />
            <h1 className="mt-4 text-3xl font-bold md:text-4xl">
              {meta.title}
            </h1>
            <p className="mt-2 text-neutral-400">{meta.year}</p>
          </header>
          <MDXProvider components={components}>
            <div className="mt-8 prose-img:rounded-xl prose prose-invert">
              {children}
            </div>
          </MDXProvider>
        </div>
      </div>
    </Layout>
  )
}
