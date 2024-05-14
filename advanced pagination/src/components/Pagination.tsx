import { useEffect, useState } from "react";

type ProductsType = {
   brand: string;
   category: string;
   description: string;
   discountPercentage: number;
   id: number;
   images: string[];
   price: number;
   rating: number;
   stock: number;
   thumbnail: string;
   title: string;
};

export const Pagination = () => {
   const [products, setProducts] = useState<ProductsType[]>([]);
   const [page, setPage] = useState(1);

   useEffect(() => {
      async function getPaginationData() {
         const url = `https://dummyjson.com/products?limit=10&skip=${
            page * 10 - 10
         }`;
         const response = await fetch(url);
         const data = await response.json();

         setProducts(data?.products);
      }

      getPaginationData();
   }, [page]);

   function managePageChange(selectedPage: number) {
      if (selectedPage >= 1 && selectedPage <= 10) {
         setPage(selectedPage);
      }
   }

   return (
      <>
         {products?.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-10">
               {products?.map((product) => (
                  <div
                     className="flex flex-col items-center justify-center"
                     key={product?.title}
                  >
                     <img
                        src={product?.thumbnail}
                        className="w-[400px] h-[300px] bg-cover"
                        alt={product?.title}
                     />
                     <h1>{product?.title}</h1>
                     <p>{product?.price}</p>
                  </div>
               ))}
            </div>
         ) : (
            <div className="w-full flex items-center justify-center mb-6">
               loading..
            </div>
         )}
         <div className="w-full flex gap-3 items-center justify-center">
            <span
               className={`p-6 border border-black rounded-lg cursor-pointer ${
                  page === 1 ? "hidden" : ""
               }`}
               onClick={() => managePageChange(page - 1)}
            >
               {"<"}
            </span>
            {[...Array(10)].map((_, i) => (
               <div
                  key={i}
                  className={`p-6 border border-black rounded-lg cursor-pointer ${
                     i + 1 === page ? "bg-gray-500" : ""
                  }`}
                  onClick={() => managePageChange(i + 1)}
               >
                  <p>{i + 1}</p>
               </div>
            ))}
            <span
               className={`p-6 border border-black rounded-lg cursor-pointer ${
                  page === 10 ? "hidden" : ""
               }`}
               onClick={() => managePageChange(page + 1)}
            >
               {">"}
            </span>
         </div>
      </>
   );
};
