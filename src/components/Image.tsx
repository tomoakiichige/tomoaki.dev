import NextImage from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export const Image = ({ src, alt, width, height, caption = '' }: Props) => {
  return (
    <figure className="rounded-xl not-prose">
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-xl"
      />
      {caption !== '' && (
        <figcaption className="text-sm text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
