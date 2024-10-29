import * as React from "react";
import Autoplay from "embla-carousel-autoplay"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselComponent() {
  return (
    <Carousel
      className="w-full "
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem key={1} className=" w-full h-full">
          <div>Contenido importante, imgs</div>
        </CarouselItem>

        <CarouselItem key={2} className=" w-full h-full">
          <div>Contenido importante, imgs</div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
