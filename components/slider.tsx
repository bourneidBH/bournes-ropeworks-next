'use client';
import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { SliderSettings } from "@/types";

const SlickSlider = ({
  slides,
  settings,
} : {
  slides: ReactNode[],
  settings: SliderSettings,
}) => {
  return (
    <Slider { ...settings }>
      {slides.map(( slide, i ) => (
        slide
      ))}
    </Slider>
  )
}

export default SlickSlider