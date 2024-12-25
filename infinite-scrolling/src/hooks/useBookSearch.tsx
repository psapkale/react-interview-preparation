import axios from "axios";
import { useEffect, useState } from "react";

export default function useBookSearch(query: string, pageNumber: number) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [books, setBooks] = useState([]);
   const [hasMore, setHasMore] = useState(false);

   useEffect(() => {
      let cancel;
      axios({
         method: "GET",
         // url: "https://openlibrary.org/search.json",
         url: "http://localhost:3000/api/names",
         params: {
            q: query,
            page: pageNumber,
         },
         cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
         .then((res) => {
            // console.log(res.data);
            setLoading(false);
            setError(false);
            console.log(res);
            setBooks(res.data);
         })
         .catch((err) => {
            if (axios.isCancel(err)) return;
            setLoading(false);
            setError(true);
         });

      return () => {};
   }, [query, pageNumber]);

   return { loading, error, books, hasMore };
}
