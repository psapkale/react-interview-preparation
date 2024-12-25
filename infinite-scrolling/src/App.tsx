import { useState } from "react";
import "./App.css";
import useBookSearch from "./hooks/useBookSearch";

function App() {
   const [query, setQuery] = useState("");
   const [pageNumber, setPageNumber] = useState(1);

   function handleChange(e: any) {
      setQuery(e.target.value);
      setPageNumber(1);
   }

   const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

   return (
      <>
         <input type="text" onChange={handleChange} />
         {books.map((name, idx) => {
            if (idx === books.length - 1) {
               const observer = new IntersectionObserver(
                  (entries) => {
                     const entry = entries[0];
                     if (entry.isIntersecting) console.log(entry);
                  },
                  {
                     threshold: 0.1,
                  }
               );

               const elem = document.getElementById(`${name}-${idx}`);
               // @ts-ignore
               observer.observe(elem);
            }
            return (
               <div key={Math.random()} id={`${name}-${idx}`}>
                  {name}
               </div>
            );
         })}
      </>
   );
}

export default App;
