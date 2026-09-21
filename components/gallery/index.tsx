'use client'
import type { FC } from 'react'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import Figure from './figure'
import Modal from '@/components/modal'
import Slider from '@/components/slider'

type Fig = {
  image: {
    src: string,
    alt: string,
    width: number,
    height: number,
    sizes?: string,
    srcset?: string,
    title?: string,
  },
  caption?: string,
}

type Props = {
  figures: Fig[]
}

const Gallery: FC<Props> = ({ figures }) => {
  const backdrop = typeof window !== 'undefined' ? document.getElementById("modal-backdrop") : null;
  const body = typeof window !== 'undefined' ? document.querySelector('body') : null

  const [open, setOpen] = useState(false)
  const [sliderSettings, setSliderSettings] = useState({
    autoplay: false,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
  })

  const openLightbox = (startingIdx: number) => {
    backdrop?.classList?.add('open')
    if (body) {
      body.style.overflow = 'hidden'
    }
    setSliderSettings({
      ...sliderSettings,
      initialSlide: startingIdx
    })
    setOpen(true)
  }

  const closeLightbox = () => {
    backdrop?.classList.remove('open')
    if (body) {
      body.style.overflow = 'auto'
    }
    setOpen(false)
  }

  return (
    <Fragment>
      <div className="gallery">
        {figures.map((fig, idx) => (
          <Figure
            key={idx}
            image={fig.image}
            caption={fig?.caption}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      <Modal classes={`lightbox ${open ? 'open' : ''}`} handleClose={closeLightbox} open={open}>
        {open ? (
          <Slider slides={figures.map((fig, idx) => (
            <Figure
              key={idx}
              image={fig.image}
              caption={fig?.caption}
              onClick={() => openLightbox(idx)}
            />
          ))} settings={sliderSettings} />
        ) : ''}
      </Modal>

    </Fragment>
  )
}

export default Gallery