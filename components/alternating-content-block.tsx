import Image from "next/image";
import Button from "./button"
import { anton } from "@/styles/fonts"

interface ContentBlock {
  index: number,
  heading: string,
  imageUrl: string,
  imageAlt: string,
  paragraphs?: string[],
  listHeading?: string,
  listItems?: string[],
  linkUrl?: string,
  linkText?: string,
}

const AlternatingContentBlock =({ index, heading, imageUrl, imageAlt, paragraphs, listHeading, listItems, linkUrl, linkText }: ContentBlock) => {
  const isEven = index % 2 == 0;
  const oddClasses = "flex flex-col-reverse place-items-center md:flex-row-reverse md:justify-center md:items-stretch"
  const evenClasses = "grid grid-cols-1 place-items-center items-stretch md:grid-cols-2"
  return (
    <div className={isEven ? evenClasses : oddClasses}>
      <div className={`relative w-full min-h-[250px] ${!isEven ? 'md:w-[50%]' : ''}`}>
        <Image 
          src={imageUrl}
          alt={imageAlt}
          fill={true}
          style={{objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
      <div 
        className={`p-8 bg-cover bg-fixed bg-top ${!isEven ? 'md:w-[50%]' : ''}`}
        style={{ backgroundImage: `url('/images/rope_background.jpg')` }}
      >
        <h2 className={`${anton.className} text-2xl font-secondary tracking-wide`}>{heading}</h2>
        {paragraphs && paragraphs.map((p, idx) => (
          <p key={idx} className="mb-2">{p}</p>
        ))}
        {listHeading && (
          <h3 className="text-center">{listHeading}</h3>
        )}
        {listItems && (
          <ul className="mx-auto">
            {listItems.map((item, i) => (
              <li key={i} className="text-center">
                {item}
              </li>
            ))}
          </ul>
        )}
        {linkUrl && linkText && (
          <div className="text-center mt-6">
            <Button
              buttonType='link' 
              linkUrl={linkUrl}
              buttonText={linkText}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default AlternatingContentBlock