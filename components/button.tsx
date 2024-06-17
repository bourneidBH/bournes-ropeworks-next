import { ReactNode } from "react";
import Link from "next/link";
import { anton } from "@/styles/fonts";

interface ButtonProps {
  buttonType: 'button' | 'link',
  buttonText: string,
  linkUrl?: string,
  onClick?: () => void,
  classNames?: string,
  children?: ReactNode,
}

const Button = ({ buttonType, buttonText, linkUrl, onClick, classNames, children }: ButtonProps) => {
  const btnClasses = `${anton.className} px-4 py-2 my-4 border-2 border-primary text-center tracking-wider bg-primary text-white hover:bg-primary-dark hover:border-primary-dark ${classNames ? classNames : ''}`
  return buttonType === 'button' 
    ? 
      <button className={btnClasses} onClick={onClick}>{children? children : buttonText}</button>
    : 
      linkUrl && linkUrl.includes('http') 
      ? <a href={linkUrl} target="_blank" rel="noopener" className={btnClasses}>{buttonText}</a>
      : <Link href={linkUrl ? linkUrl : "#"} className={btnClasses}>{children? children : buttonText}</Link>
}

export default Button