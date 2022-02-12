import NextHead from 'next/head'

type Props = {
  title?: string
}

export const Head = ({ title = '' }: Props) => {
  const titleContent = title === '' ? 'tomoaki.dev' : `${title} | tomoaki.dev`

  return (
    <NextHead>
      <title>{titleContent}</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
