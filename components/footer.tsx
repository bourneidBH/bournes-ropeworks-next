import Image from "next/image"
import Link from "next/link"
import Container from "./container"
import { anton } from "@/styles/fonts"

const Footer = () => {
  return(
    <div className="w-full bg-primary text-white text-sm">
      <Container>
        <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <Link href="/" title="Bourne's RopeWorks home page" className="w-[160px]">
              <Image 
                src="/images/BournesRopeworks_logo-reverse.png"
                alt="Bourne's Ropeworks logo"
                width={100}
                height={50}
                unoptimized={true}
              />
            </Link>
            <p className="">1739 Johnston Dr.<br />
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
            <Link href="/splicing" className="my-2">Marine</Link>
            <Link href="/rigging" className="my-2">Industrial</Link>
            <Link href="/custom" className="my-2">Architectural</Link>
          </div>
          <div className="flex flex-col">
            <h3 className={anton.className}>Contact</h3>
            <Link href="/splicing" className="my-2">Request a Quote</Link>
            <a href="mailto:info@bournesropeworks.com" className="my-2">info@bournesropeworks.com</a>
            <a href="tel:+14143804246" className="my-2">414-380-4246</a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer