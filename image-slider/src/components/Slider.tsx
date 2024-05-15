import { useRef } from "react";

type ImageDataProps = {
   imgData: string[];
};

export const Slider = ({ imgData }: ImageDataProps) => {
   const containerRef = useRef<HTMLDivElement>(null);

   function slideLeft() {
      containerRef.current?.scrollTo({
         left: containerRef.current?.scrollLeft - 400,
         behavior: "smooth",
      });
   }

   function slideRight() {
      containerRef.current?.scrollTo({
         left: containerRef.current?.scrollLeft + 400,
         behavior: "smooth",
      });
   }

   return (
      <div className="sliderContainer">
         <div
            style={{
               border: "1px solid white",
               cursor: "pointer",
               borderRadius: "20%",
               padding: "20px",
            }}
            onClick={slideLeft}
         >
            Left
         </div>
         <div className="container" ref={containerRef}>
            {imgData.map((img, idx) => (
               <div key={idx} className="imgHolder">
                  <img src={img} alt="" id={img.toString()} />
               </div>
            ))}
         </div>
         <div
            style={{
               border: "1px solid white",
               cursor: "pointer",
               borderRadius: "20%",
               padding: "20px",
            }}
            onClick={slideRight}
         >
            Right
         </div>
      </div>
   );
};
