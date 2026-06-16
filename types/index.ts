export type CardData = {
  title: string,
  imageUrl: string,
  body: string[],
  priceInfo?: string,
  linkUrl?: string,
  linkText?: string,
  minImageHeight?: number,
  imageAspectRatio?: string,
}

export type BannerData = {
  title?: string,
  subhead?: string,
  body?: string[],
  imageUrl: string,
  linkUrl?: string,
  linkText?: string,
}

export type ResponsiveSetting = {
  breakpoint: number,
  settings: {
    slidesToShow: number,
    slidesToScroll: number,
    dots?: boolean,
    arrows?: boolean,
    infinite?: boolean,
    centerMode?: boolean,
    autoplay?: boolean,
  }
}

export type SliderSettings = {
    autoplay?: boolean,
    arrows?: boolean,
    dots?: boolean,
    infinite?: boolean,
    speed?: number,
    autoplaySpeed: number,
    slidesToShow: number,
    slidesToScroll?: number,
    pauseOnHover?: boolean,
    pauseOnFocus?: boolean,
    centerMode?: boolean,
    responsive?: ResponsiveSetting[],
}