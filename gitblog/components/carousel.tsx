"use client"
import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState } from "react";
import Dots from "./dots";
import CarouselControls from "./carouselcontrols";
// Define the props
type Props = PropsWithChildren ;

const Carousel = ({ children, ...options }: Props) => {

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const canScrollPrev = !!emblaApi?.canScrollPrev();
    const canScrollNext = !!emblaApi?.canScrollNext();
  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);
  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="overflow-hidden" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex h-full">{children}</div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
      <CarouselControls
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        />
    </div>
  );
};
export default Carousel;