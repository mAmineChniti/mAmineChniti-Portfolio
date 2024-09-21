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
import Card from "@components/Card";
import projects from "@/projects.json"; // Import the JSON file

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
        {projects.map((project, index) => (
          <CarouselItem key={index} className={styles.carouselItem}>
            <Card
              projectUrl={project.projectUrl}
              img={project.image}
              title={project.title}
              description={project.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className={styles.carouselButton} />
    </ShadCarousel>
  );
}
