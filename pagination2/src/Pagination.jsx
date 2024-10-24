import React, { useEffect, useState } from "react";

export default function Pagination() {
   const [products, setProducts] = useState([]);
   const [pageIndex, setPageIndex] = useState(0);
   const offset = 5;

   async function fetchData() {
      const data = await fetch("https://dummyjson.com/products?limit=100");
      const res = await data.json();

      setProducts(res?.products);
   }

   function handleClick(i) {
      setPageIndex(i);
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <>
         <div className="container">
            {products
               .slice(pageIndex * offset, pageIndex * offset + offset)
               .map((product, i) => (
                  <div key={product.id}>
                     <img
                        src={product.images[0]}
                        alt={product.title}
                        width="400px"
                        height="500px"
                     />
                  </div>
               ))}
         </div>

         <div className="btns">
            <button
               disabled={pageIndex === 0}
               onClick={() => setPageIndex(pageIndex - 1)}
            >
               Prev
            </button>
            {Array(parseInt(products.length / offset))
               .fill("")
               .map((_, i) => {
                  console.log(i, pageIndex);
                  return (
                     <button
                        disabled={pageIndex === i}
                        onClick={() => handleClick(i)}
                     >
                        {i + 1}
                     </button>
                  );
               })}
            <button
               disabled={pageIndex === parseInt(products.length / offset) - 1}
               onClick={() => setPageIndex(pageIndex + 1)}
            >
               Next
            </button>
         </div>
      </>
   );
}
