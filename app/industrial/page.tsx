import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import AlternatingContentBlock from "@/components/alternating-content-block";
import Button from "@/components/button";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Industrial Rigging Services | Bourne's Ropeworks",
  description: "Industrial rigging services including splicing for truck-mounted winch lines, auger sling lines, and more. We ship nationwide.",
};

const blocks = [
  {
    heading: 'Winch Lines & Auger Slings',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/winch-line.jpg`,
    imageAlt: 'Truck-mounted drum winch line',
    paragraphs: [
      'Winch lines are long, large-diameter, double-braided Dacron rope with eyes spliced on each end. They are stored on large winch drums (often truck-mounted), and used to tension things such as high-voltage power lines or telephone pole applications because the rope is electrically non-conductive.',
      'Auger sling lines are short, large-diameter, double-braided Dacron rope with eyes spliced on each end. They are used to pull augers out of holes being drilled.',
    ],
  },
  {
    heading: 'Other Industrial Applications',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/winch-line2.jpg`,
    imageAlt: 'Class II double-braid splice on a truck application',
    paragraphs: [
      'If you have questions about other possible industrial applications, please contact us. For all industrial applications, please request a price quote. Discounts may be available for volume orders.',
    ],
  },
]

export default function Marine() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-3xl mb-4 tracking-wide md:text-4xl`}>Industrial Rigging Services in Wisconsin</h1>
        <p className="text-center">Keep your equipment operating safely and efficiently with dependable industrial rigging services. We provide professional splicing for truck-mounted winch lines, auger sling lines, and other specialized lifting and pulling applications. Each line is prepared with care to support reliable performance in demanding work environments.</p>
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
      <Container className="flex justify-center py-8 md:py-12">
        <Button
          buttonType="link"
          buttonText="Contact Bourne's Ropeworks for your next industrial rigging project"
          linkUrl="/contact"
        />
      </Container>
    </>
  )
}