import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import AlternatingContentBlock from "@/components/alternating-content-block";
import Button from "@/components/button";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Architectural Rigging Services | Bourne's Ropeworks",
  description: "Architectural rigging services in Manitowoc and Sheboygan, WI, featuring swaging for wire porch and stair railings and cable railing systems.",
};

const blocks = [
  {
    heading: 'Wire Railings',
    imageUrl: '/images/Deck-005.jpg',
    imageAlt: 'Wire deck railing',
    paragraphs: [
      'Wire railings and rungs for porches, decks, and stairways are made from 7 x 19 stainless steel wire rope. They can be made as not-adjustable, or for adjustable tension with a turnbuckle at one end.',
    ],
  },
  {
    heading: 'Installation Information',
    imageUrl: '/images/wire-railing-2_1920x600.jpg',
    imageAlt: 'Wire deck and stair railing',
    paragraphs: [
      'For customers in the Sheboygan/Manitowoc County area, we will be happy to work with your carpenter, builder, or fabricator to take measurements and install the finished work. In all other areas, customers are responsible for supplying accurate specifications and measurements. We do not provide installation outside of East Central Wisconsin.',
      'For all architectural applications, please request a price quote. Discounts may be available for volume orders.',
    ],
  },
]

export default function Marine() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Architectural Rigging Services</h1>
        <p className="text-center">Create clean, secure, and professionally finished cable railing systems with reliable architectural rigging services. We provide swaging for wire porch and stair railings, helping deliver strong, precise connections for residential and commercial applications. Installation services are available locally in the Manitowoc and Sheboygan, Wisconsin area. Customers outside this service area are responsible for providing accurate measurements and completing or arranging correct installation.</p>
      </div>
      {blocks.map((block, idx) => (
        <AlternatingContentBlock
          key={idx}
          index={idx}
          heading={block.heading}
          imageUrl={block.imageUrl}
          imageAlt={block.imageAlt}
          paragraphs={block.paragraphs}
        />
      ))}
      <Container className="flex justify-center py-16">
        <Button
          buttonType="link"
          buttonText="Contact Bourne's Ropeworks for your next architectural rigging project"
          linkUrl="/contact"
        />
      </Container>
    </>
  )
}