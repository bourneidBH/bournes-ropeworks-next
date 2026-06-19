import Image from "next/image";
import Button from "@/components/button";
import Container from "@/components/container";
import { anton } from "@/styles/fonts";

export default function About() {
    return (
        <>
            <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
                <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>About Us</h1>
                <p className="text-center">Bourne’s Ropeworks over 40 years of experience in the splicing and rigging business. We are committed to producing high-quality splicing and rigging. Our passion is splicing rope…any knot you need, we’ll be happy to create!</p>
            </div>
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr]">
                    <Image 
                        src="/images/furling-install.jpg"
                        alt="Furling Installation"
                        width={600}
                        height={554}
                        unoptimized={true}
                    />
                    <div>
                        <p>Based in Manitowoc, Wisconsin, we fabricate docklines, mooring lines, and sailboat running rigging with high-tech line. Our standing rigging is made of the highest quality stainless steel fittings. We also swage shrouds, stays, lifelines and architectural rigging products.</p>
                        <p>In addition to rigging, Jim Bourne also has eleven years experience as a Harken Yacht Equipment service technician. Bourne's Ropeworks is a Harken authorized service center for Harken installations and repairs.`,
                </p>
                <p>With Bourne’s Ropeworks you can count on a high-quality, reliable product, and consistent customer service and technical support.</p>
                <p>We are proud to serve diverse clients including Paralympics sailing silver medallist John Ruf, Harken Yacht Equipment, Wisconsin Lifting Specialists, Inc., University of Wisconsin-Milwaukee Water Institute, and Nautor-Swan.</p>
                        <h2 className={anton.className}>Our History</h2>
                        <p>Bourne’s Ropeworks was started in 1984 by Jim Bourne while he was working on restoring antique wooden boats. He discovered that much of the traditional art of fancy rope work like rope fenders, leathering ship's wheels, and leather chafe-protected dock lines had been lost. From researching obscure knots with guidance from rigger Brion Toss, to expanding the business into modern rigging and splicing with high-tech lines, over the years Bourne’s Ropeworks has become a trusted name in rigging.</p>
                        <div className="flex justify-center">
                            <Button 
                            buttonType="link" 
                            linkUrl="/contact"
                            buttonText="Contact us today for all your rigging needs"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}