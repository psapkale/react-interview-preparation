import { useState } from "react";
import { data } from "./utils";

const Pagination = () => {
   const [pageNumber, setPageNumber] = useState(0);
   const [pageData] = useState(data);
   const offset = 10;

   const handlePrev = () => {
      if (pageNumber === 0) {
         return;
      }

      setPageNumber((prev) => prev - 1);
   };

   const handleNext = () => {
      if (pageNumber === pageData.length / offset - 1) {
         return;
      }

      setPageNumber((prev) => prev + 1);
   };

   return (
      <div>
         {pageData
            .slice(pageNumber * offset, pageNumber * offset + offset)
            .map((d) => (
               <div key={d.id}>{d.name}</div>
            ))}
         <div>
            <button disabled={pageNumber === 0} onClick={handlePrev}>
               Prev
            </button>
            {Array(pageData.length / offset)
               .fill("")
               .map((_, i) => (
                  <button
                     disabled={pageNumber === i}
                     onClick={() => setPageNumber(i)}
                  >
                     {i + 1}
                  </button>
               ))}
         </div>
         <button
            disabled={pageNumber === pageData.length / offset - 1}
            onClick={handleNext}
         >
            Next
         </button>
      </div>
   );
};

export default Pagination;
