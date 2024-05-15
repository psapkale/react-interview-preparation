import { useState, useEffect } from "react";

export const ProgressBar = () => {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      const timer = setTimeout(() => {
         if (progress < 100) {
            setProgress((prev) => ++prev);
         }
      }, 100);

      return () => clearTimeout(timer);
   }, [progress]);

   return (
      <div className="container">
         <h1 className="tagName">Progress Bar</h1>
         <div className="barContainer">
            <div
               className="progressBar"
               style={{
                  width: `${progress}%`,
               }}
            >
               {progress}%
            </div>
         </div>
      </div>
   );
};
