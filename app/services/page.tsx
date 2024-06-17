import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Splicing',
    imageUrl: '/images/running-rigging.jpg',
    body: [
      'From replacement standing rigging and lifelines, to sailboat running rigging and sail handling systems, we will ensure you get the correct rigging solution for your boat the first time.'
    ],
    linkUrl: '/splicing',
    linkText: 'Learn More',
  },
  {
    title: 'Rigging',
    imageUrl: '/images/winch-line.jpg',
    body: [
      'Our heavy-duty industrial winch lines and auger sling lines are popular in construction and utility industries. We ship nationwide.'
    ],
    linkUrl: '/rigging',
    linkText: 'Learn More',
  },
  {
    title: 'Custom',
    imageUrl: '/images/wire-railing-2_1920x600.jpg',
    body: [
      'Wire railings can give your architectural project a clean, modern look. For local projects, we can work with your builder to measure and install railings.'
    ],
    linkUrl: '/custom',
    linkText: 'Learn More',
  }
]

export const metadata: Metadata = {
  title: "Services - Bourne's Ropeworks",
  description: "Bourne's Ropeworks offers a variety of rope splicing and rigging services.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Our Services</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec. In eu mi bibendum neque. Volutpat maecenas volutpat blandit aliquam etiam erat. Mi bibendum neque egestas congue. Arcu cursus euismod quis viverra nibh cras. A diam maecenas sed enim ut sem viverra. At consectetur lorem donec massa sapien faucibus et molestie ac. Turpis massa tincidunt dui ut ornare. Dui sapien eget mi proin sed libero enim. Sagittis nisl rhoncus mattis rhoncus urna neque. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Integer feugiat scelerisque varius morbi enim nunc. Accumsan lacus vel facilisis volutpat est velit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Semper eget duis at tellus at urna.</p>
      </div>

      <Container className="mb-12 px-12 md:mb-24 md:px-24">
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
    </>
  )
}