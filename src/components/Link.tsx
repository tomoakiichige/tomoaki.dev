import NextLink from 'next/link'
// import type { ReactNode } from 'react'

type Props = {
  // href: string
  // children: ReactNode
  [key: string]: any
}

export const Link = ({ href, children, ...props }: Props) => {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:')
  const isStatic = /^\/files\/.*/.test(href)

  if (isExternal || isStatic) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} {...props}>
      <a>{children}</a>
    </NextLink>
  )
}
