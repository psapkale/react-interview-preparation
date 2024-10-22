import { useState } from "react";
import "./App.css";
import Accordian from "./Accordian";

function App() {
   const accordianData = [
      {
         title: "title1",
         content: "content1",
      },
      {
         title: "title2",
         content: "content2",
      },
      {
         title: "title3",
         content: "content3",
      },
      {
         title: "title4",
         content: "content4",
      },
      {
         title: "title5",
         content: "content5",
      },
   ];
   const [activeIndex, setActiveIndex] = useState(null);

   function handleItemClick(i) {
      setActiveIndex((prev) => (prev === i ? null : i));
   }

   return (
      <div>
         <h1>Accordian</h1>
         {accordianData.map((accordian, i) => (
            <Accordian
               title={accordian.title}
               content={accordian.content}
               isOpen={activeIndex === i}
               handleClick={() => handleItemClick(i)}
            />
         ))}
      </div>
   );
}

export default App;
