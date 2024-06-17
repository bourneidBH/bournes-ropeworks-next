import { Roboto, Anton } from "next/font/google";

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
});

const anton = Anton({
  weight: "400",
  subsets: ['latin'],
});

export { roboto, anton }