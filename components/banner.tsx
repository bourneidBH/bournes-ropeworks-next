import Image from "next/image";
import { BannerData } from "../types";
import { anton } from "@/styles/fonts"

const Banner = (props: BannerData) => {
  return (
    <div 
      className="relative flex flex-col items-center justify-center w-full max-w-[100%] min-h-[200px] text-center text-white md:min-h-[300px] lg:min-h-[350px]"
    >
      <Image 
        src={props.imageUrl} 
        alt={props?.title || ''} 
        fill={true}
        style={{ zIndex: -1, objectFit: 'cover', objectPosition: 'center' }}
        unoptimized={true}
        sizes="(max-width: 768px) 100vw"
      />
      {(props?.title || props?.subhead || props?.body || props?.linkText ) && (
        <div className={`relative max-w-[calc(100%-48px)] mx-auto bg-black/50 p-4 flex flex-col items-center justify-center ${props?.inSlider ? 'mt-[100px]' : ''} md:p-8 md:max-w-prose`}>
          {props?.title && (
            <h2 className={`${anton.className} text-2xl`}>{props.title}</h2>
          )}
          {props?.subhead && (
            <p className="text-xl font-bold">{props.subhead}</p>
          )}
          {props?.body && props.body.map((el, i) => (
              <p key={i}>{el}</p>
            ))
          }
          {props?.linkUrl && props?.linkText && (
            <a 
              className="btn text-white border-white hover:border-neutral-light" 
              href={props.linkUrl} 
              target={props.linkUrl.includes('http') ? '_blank' : '_self'} 
              rel={props.linkUrl.includes('http') ? 'no-referrer' : 'origin'}
            >
              {props.linkText}
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default Banner