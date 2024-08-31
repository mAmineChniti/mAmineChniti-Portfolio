"use client";

import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import styles from "./index.module.css";

export default function Carousel() {
  return (
    <ShadCarousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className={styles.carouselWrapper}
    >
      <CarouselPrevious className={styles.carouselButton} />
      <CarouselContent className={styles.carouselContent}>
        <CarouselItem className={styles.carouselItem}> Item 1 </CarouselItem>
        <CarouselItem className={styles.carouselItem}> Item 2 </CarouselItem>
        <CarouselItem className={styles.carouselItem}> Item 3 </CarouselItem>
      </CarouselContent>
      <CarouselNext className={styles.carouselButton} />
    </ShadCarousel>
  );
}
