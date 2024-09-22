"use client";

import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import Card from "@components/Card";
import projects from "@/projects.json";

export default function Carousel() {
  return (
    <ShadCarousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="absolute left-1/2 top-1/2 mt-6 flex h-auto max-h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform items-center justify-center"
    >
      <CarouselPrevious className="text-neutral-900/90 opacity-85 disabled:text-transparent" />
      <CarouselContent className="min-w-8 max-w-2xl">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Card
              projectUrl={project.projectUrl}
              img={project.image}
              title={project.title}
              description={project.description}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="text-neutral-900/90 opacity-85 disabled:text-transparent" />
    </ShadCarousel>
  );
}
