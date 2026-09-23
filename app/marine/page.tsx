import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import AlternatingContentBlock from "@/components/alternating-content-block";
import Button from "@/components/button";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Marine Rigging Services | Bourne's Ropeworks",
  description: "Marine rigging services in Manitowoc and Sheboygan, WI, including standing and running rigging, dock lines, lifelines, halyards, and more.",
};

const blocks = [
  {
    heading: 'Standing Rigging',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/life-line1.jpg`,
    imageAlt: 'Swaged end of sailboat lifeline',
    paragraphs: [
      'Shrouds and stays are made from 1 x 19 stainless steel wire rope.',
      'Lifelines are made from PVC-coated stainless steel wire rope.',
      'In the Sheyboygan/Manitowoc County area, we will alter existing or build new headstays to accommodate headsail furlers. Contact us for a price quote.'
    ],
  },
  {
    heading: 'Running Rigging',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/running-rigging.jpg`,
    imageAlt: 'Sailboat mastbase with various halyards',
    paragraphs: [
      'Halyards and sheets are made from double-braided Dacron.',
      'Anchor rode and ground tackle are made from three-stranded nylon rope.',
      'Wire-to-rope halyards are made from double-braided Dacron spliced to 7 x 19 stainless steel wire.'
    ],
  },
  {
    heading: 'Dock Lines',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/dock-line4.jpg`,
    imageAlt: 'Mooring with spliced docklines shackled to ring bolt',
    paragraphs: [
      'Traveling dock lines are measured and custom-made to travel with the boat.',
      'Stationary dock lines include, bow line, stern lines, fore-and-aft spring lines, mooring pennants, and chain shackled to the dock where applicable. Bow catchers are optional. All stationary dock lines are custom-made to fit your boat based on cleat size, size of slip, location of boat in the slip, and location of dockside cleats or ring bolts.',
      'For customers in the Sheboygan/Manitowoc County area, we will properly place your boat in your slip, take all required measurements, produce and install dock lines for an additional charge. Please request a price quote. For customers in other areas, please contact us and we will explain which measurements are required. Customers are responsible for providing accurate measurements.'
    ],
  },
  {
    heading: 'Harken Service Center',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/furling-install.jpg`,
    imageAlt: 'Jim Bourne installing a Harken MKIII furler',
    paragraphs: [
      'In addition to our rigging services, we are also an authorized service center for Harken installations and repairs.',
      'In the Sheyboygan/Manitowoc County area, we will alter existing or build new headstays to accommodate headsail furlers. Contact us for a price quote.'
    ],
  },
]

export default function Marine() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-3xl mb-4 tracking-wide md:text-4xl`}>Marine Rigging Services in Wisconsin</h1>
        <p className="text-center">Keep your vessel secure, responsive, and ready for the water with professional marine rigging services tailored to your boat. We offer sailboat standing and running rigging, custom-measured and spliced dock lines, lifelines, halyards, and other essential rigging components built for dependable performance.</p>
        <p className="text-center">Installation services are available locally in the Manitowoc and Sheboygan, Wisconsin area. Customers outside this service area are responsible for providing accurate measurements and completing or arranging correct installation.</p>
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
          buttonText="Contact Bourne's Ropeworks for your next marine rigging project"
          linkUrl="/contact"
        />
      </Container>
    </>
  )
}