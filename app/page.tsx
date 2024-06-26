import type { Metadata } from "next";
import AlternatingContentBlock from "@/components/alternating-content-block"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"
import { anton } from "@/styles/fonts"

export const metadata: Metadata = {
  title: "Bourne's Ropeworks",
  description: "Bourne's Ropeworks is an experienced rigger based in Manitowoc, WI. We provide rope splicing services for marine and industrial applications.",
};

const cards: CardData[] = [
  {
    title: 'Marine Rigging',
    imageUrl: '/images/running-rigging.jpg',
    body: [
      'From replacement standing rigging and lifelines, to sailboat running rigging and sail handling systems, we will ensure you get the correct rigging solution for your boat the first time.'
    ],
    linkUrl: '/marine',
    linkText: 'Learn More',
  },
  {
    title: 'Industrial Rigging',
    imageUrl: '/images/winch-line.jpg',
    body: [
      'Our heavy-duty industrial winch lines and auger sling lines are popular in construction and utility industries. We ship nationwide.'
    ],
    linkUrl: '/industrial',
    linkText: 'Learn More',
  },
  {
    title: 'Architectural Rigging',
    imageUrl: '/images/wire-railing-2_1920x600.jpg',
    body: [
      'Wire railings can give your architectural project a clean, modern look. For local projects, we can work with your builder to measure and install railings.'
    ],
    linkUrl: '/architectural',
    linkText: 'Learn More',
  }
]

export default function Home() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Custom Rigging Solutions</h1>
        <p className="text-center">With over 30 years experience in fiber and wire rope, we are committed to producing high-quality splicing and rigging solutions. Our passion is splicing rope…any knot you need, we’ll be happy to create! Based in the Manitowoc, Wisconsin area, we can measure and install any local project, or splice to specifications provided and ship finished product nationwide.</p>
      </div>

      <AlternatingContentBlock
        index={0}
        heading="Rope Splicing"
        paragraphs={[
          `We offer many types of rope splices including eye splices, locking eye splices, back splices, end-to-end constant diameter splices, long splices, and tail splices.`,
          `We will recommend the correct type of rope, diameter, and type of splice for your application.`
        ]}
        listHeading="Applications:"
        listItems={[
          'Dock lines', 'Anchor lines', 'Sailboat running rigging', 'Industrial auger sling lines', '...and more'
        ]}
        imageUrl="/images/bow-catch_1920-600.jpg"
        imageAlt="Dock lines"
        linkUrl="/splicing"
        linkText="See All Splices"
      />

      <Container className="my-12 px-12 md:my-24 md:px-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <Card 
              key={idx}
              title={card.title}
              imageUrl={card.imageUrl}
              body={card.body}
              linkUrl={card.linkUrl}
              linkText={card.linkText}
            />
          ))}
        </div>

      </Container>

      <AlternatingContentBlock
        index={1}
        heading="Wire Rope Swaging"
        paragraphs={[
          `We can supply finished product for a variety of wire rope applications including swaging permanent eyes, forks or turnbuckles, wrie-to-rope splicing, and wire railings.`,
          `We will recommend the correct type of wire and end fittings for your application.`
        ]}
        listHeading="Applications:"
        listItems={[
          'Life lines', 'Stays', 'Wire railings', '...and more'
        ]}
        imageUrl="/images/life-line3_1920x600.jpg"
        imageAlt="Life lines"
        linkUrl="/rigging"
        linkText="See Rigging Services"
      />
    </>
  );
}
