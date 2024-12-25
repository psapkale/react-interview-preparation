import { useEffect, useState } from "react";

const lights = ["red", "yellow", "green"];

const TrafficLights = () => {
   const [currLight, setCurrLight] = useState("red");
   const [time, setTime] = useState(getCurrTimeout(currLight));

   const getNextLight = (l: string) => {
      switch (l) {
         case "red":
            return "yellow";

         case "yellow":
            return "green";

         default:
            return "red";
      }
   };

   function getCurrTimeout(l: string) {
      switch (l) {
         case "red":
            return 5;

         case "yellow":
            return 2;

         default:
            return 3;
      }
   }

   const updateTimer = (timeout: number) => {
      setTime(timeout);
   };

   useEffect(() => {
      const nextLight = getNextLight(currLight);
      const timeout = getCurrTimeout(currLight);

      const timer = setTimeout(() => {
         setCurrLight(nextLight);
      }, timeout * 1000);

      return () => {
         clearTimeout(timer);
      };
   }, [currLight]);

   // useEffect(() => {
   //    const timeout = getCurrTimeout(currLight);
   //    updateTimer(timeout);
   //    let timer = timeout;

   //    const interval = setInterval(() => {
   //       updateTimer(timer--);
   //    }, 1000);

   //    return () => {
   //       clearInterval(interval);
   //    };
   // }, [currLight]);

   return (
      <div>
         {lights.map((light) => (
            <div
               style={{
                  backgroundColor: currLight === light ? light : "gray",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
               }}
            ></div>
         ))}
         {time}
      </div>
   );
};

export default TrafficLights;
