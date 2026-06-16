import Image from "next/image";
import { BannerData } from "../types";

const Banner = (props: BannerData) => {
  return (
    <div className="relative flex height-[250px] flex-col items-center justify-center w-full bg-primary bg-no-repeat bg-cover bg-center text-center text-white" style={{ backgroundImage: `url(${props.imageUrl})`}}>
      <Image 
        src={props.imageUrl} 
        alt={props?.title || ''} 
        fill={true}
        style={{objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
        unoptimized={true}
      />
      {(props?.title || props?.subhead || props?.body || props?.linkText ) && (
        <div className="max-w-prose mx-auto bg-black/75 p-12 flex flex-col items-center justify-center">
          {props?.title && (
            <h2 className="text-3xl">{props.title}</h2>
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