"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 800, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem className="md:basis-2/5 lg:basis-1/5" key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="aspect-<16/9> items-center justify-around p-3">
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                    User {index + 1}
                  </h4>
                  <p className="leading-7 [&:not(:first-child)]:mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci, amet?
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
