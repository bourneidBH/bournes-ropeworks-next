import Image from "next/image"
import Link from "next/link"
import Container from "./container"
import { anton } from "@/styles/fonts"

const Footer = () => {
  return(
    <footer className="w-full bg-primary text-white text-sm border-t-4 border-t-secondary">
      <Container>
        <div className="p-6 grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <div className="flex flex-col text-center lg:text-left">
            <Link href="/" title="Bourne's RopeWorks home page" className="w-[100px] mx-auto lg:mx-0">
              <Image 
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/BournesRopeworks_logo-reverse.png`}
                alt="Bourne's Ropeworks logo"
                width={100}
                height={50}
                unoptimized={true}
              />
            </Link>
            <p>1739 Johnston Dr.<br />
            Manitowoc, WI 54220
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className={anton.className}>Services</h3>
            <Link href="/splicing" className="my-2">Splicing</Link>
            <Link href="/rigging" className="my-2">Rigging</Link>
            <Link href="/custom" className="my-2">Custom</Link>
          </div>
          <div className="flex flex-col">
            <h3 className={anton.className}>Industries</h3>
            <Link href="/marine" className="my-2">Marine</Link>
            <Link href="/industrial" className="my-2">Industrial</Link>
            <Link href="/architectural" className="my-2">Architectural</Link>
          </div>
          <div className="flex flex-col">
            <h3 className={anton.className}>Contact</h3>
            <Link href="/contact" className="my-2">Request a Quote</Link>
            <span className="my-2">info@bournesropeworks.com</span>
            <a href="tel:+14143804246" className="my-2">414-380-4246</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer