import Image from "next/image"
import { CardData } from "../types"
import Button from "./button"
import { anton } from "@/styles/fonts"

const Card = (props: CardData) => {
  return (
    <div className="bg-white shadow-lg w-full max-w-screen-sm pb-4">
      <div className="relative h-[200px]" style={{ minHeight : `${props?.minImageHeight ? props.minImageHeight : 200}px`}}>
        <Image 
          src={props.imageUrl} 
          alt={props.title} 
          fill={true}
          style={{objectFit: 'cover', objectPosition: 'center'}}
          sizes="(max-width: 768px) 100vw, (max-width: 980px) 33vw"
        />
        <h3 className={`${anton.className} text-xl text-white drop-shadow p-4 absolute bottom-0 tracking-wide`}>{props.title}</h3>
      </div>
      <div className="p-4">
        {props.body.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </div>
      {props?.priceInfo && (
        <div className="border-t border-neutral-light p-4">
          <p>{props.priceInfo}</p>
        </div>
      )}
      {props?.linkUrl && props?.linkText && (
        <div className="p-4">
          <Button
            buttonType='link' 
            linkUrl={props.linkUrl}
            buttonText={props.linkText}
            classNames="bg-transparent text-primary-dark hover:text-white"
          />
        </div>
      )}

    </div>
  )
}

export default Card