import type { FC } from 'react'
import Image from 'next/image'

type Props = {
  image: {
    src: string,
    alt: string,
    width: number,
    height: number,
    sizes?: string,
    srcset?: string,
  },
  caption?: string,
  inLightbox?: boolean,
  onClick?: () => void
}


const Figure: FC<Props> = ({ image, caption, inLightbox, onClick }) => {

  return (
    <div className="gallery-item">
      <figure className="image">
        {inLightbox ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={image?.sizes}
            unoptimized={true}
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            sizes={image?.sizes}
            fill={true}
            style={{ objectFit: 'cover' }}
            onClick={onClick}
            unoptimized={true}
          />
        )}
        {image?.alt && (
          <figcaption>{image.alt}</figcaption>
        )}
      </figure>
      {caption && (
        <div className="gallery-image-title">{caption}</div>
      )}
    </div>
  )
}

export default Figure