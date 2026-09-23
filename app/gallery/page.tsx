import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Button from "@/components/button";
import Container from "@/components/container";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Project Gallery | Bourne's Ropeworks",
  description: "View our gallery of marine, industrial, and architectural rigging projects.",
};

const figures = [
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/barge-docklines.jpg`,
      alt: 'Barge docklines',
      width: 750,
      height: 1000,
    },
    caption: 'This 3-strand splice in oversized 1-1/2" diameter rope is for a set of barge docklines.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/rope-handles_rot-proofing-process.jpg`,
      alt: 'Manila, 3-strand end-to-end splice',
      width: 1000,
      height: 753,
    },
    caption: 'These three-strand Manila rope handles were made for reproduction WWII era ammunition boxes. The photo, courtesy of David Gray, shows the traditional rot-proofing process the handles go through after splicing.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/4-1-block-and-tackle.jpg`,
      alt: '4:1 Block-and-tackle in 3-strand rope',
      width: 1000,
      height: 563,
    },
    caption: 'This project included both traditional three-strand splicing and right-angle reeving to create a 4:1 purchase block-and-tackle.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/black-double-braid-docklines.jpg`,
      alt: 'Double-braid eye splice',
      width: 1000,
      height: 1000,
    },
    caption: 'While most docklines are made from three-strand rope, this customer chose a beautiful, black double-braid Nylon rope.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/double-braid-halyard-spliced-on-thimble.jpg`,
      alt: 'Double-braid spliced onto thimble',
      width: 1000,
      height: 1000,
    },
    caption: 'This double-braid splice for a halyard terminates on a thimble.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/double-braid-splice-to-harken-lead-ring.jpg`,
      alt: 'Double-braid spliced onto a ring',
      width: 1000,
      height: 1000,
    },
    caption: 'This double-braid halyard was spliced directly onto a Harken lead ring.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/double-braid-halyard-spliced-to-snap-shackle.jpg`,
      alt: 'Double-braid spliced onto snap shackle',
      width: 1000,
      height: 1000,
    },
    caption: 'This double-braid halyard was spliced directly onto a snap shackle.'
  },
  {
    image: {
      src: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/gallery/3-strand-mooring-lines.jpg`,
      alt: 'Three-strand mooring lines installed',
      width: 1000,
      height: 1000,
    },
    caption: 'These three-strand spliced mooring lines were measured, spliced, and installed.'
  },

]

export default function GalleryPage() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-3xl mb-4 tracking-wide md:text-4xl`}>Rigging &amp; Splicing Project Gallery</h1>
        <p className="text-center">Explore a selection of our recent marine, industrial, and architectural rigging projects completed with attention to detail and dependable craftsmanship. From sailboat rigging and custom-spliced dock lines to industrial winch lines, auger sling lines, and wire railing systems, our work is built to meet the needs of each application. Browse our project gallery to see examples of the rigging services available in the Manitowoc and Sheboygan, Wisconsin area.</p>
      </div>
      <Container>
        <Gallery figures={figures} />
      </Container>
      <Container className="flex justify-center py-8 md:py-12">
        <Button 
          buttonType="link"
          buttonText="Contact Bourne's Ropeworks for your next rigging project"
          linkUrl="/contact"
        />
      </Container>
      
    </>
  )
}