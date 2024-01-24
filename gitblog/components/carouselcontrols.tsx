import classNames from "classnames";
import { useState } from "react";
type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};


const CarouselControls = (props: Props) => {
  return (
    <div className="flex justify-center gap-5 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-3 py-1 mt-3 text-white rounded-md": true,
          "hover:bg-rose-300": true ,
          "variant":"ghost"
           
        })}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "px-3 py-1 mt-3 text-white rounded-md": true,
          "variant":"ghost",
          "hover:bg-rose-300": true,
  
        })}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselControls;