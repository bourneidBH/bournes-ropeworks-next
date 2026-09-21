import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Project Gallery | Bourne's Ropeworks",
  description: "View our gallery of marine, industrial, and architectural rigging projects.",
};

const figures = [
  {
    image: {
      src: '/images/life-line1.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption'
  },
  {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
  {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'Test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
  {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
    {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
    {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
    {
    image: {
      src: '/images/running-rigging.jpg',
      alt: 'test',
      width: 600,
      height: 450,
    },
    caption: 'Test caption 2'
  },
]

export default function GalleryPage() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Industrial Rigging Services</h1>
        <p className="text-center">Explore a selection of recent marine, industrial, and architectural rigging projects completed with attention to detail and dependable craftsmanship. From sailboat rigging and custom-spliced dock lines to industrial winch lines, auger sling lines, and wire railing systems, our work is built to meet the needs of each application. Browse our project gallery to see examples of the rigging services available in the Manitowoc and Sheboygan, Wisconsin area.</p>
      </div>
      <Container>
        <Gallery figures={figures} />
      </Container>
    </>
  )
}