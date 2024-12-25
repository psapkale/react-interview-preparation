import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

const names = [
   "John",
   "Joe",
   "James",
   "Ron",
   "Harry",
   "Peter",
   "Daniel",
   "Vicky",
   "Rixine",
];

app.get("/api/names", (req: Request, res: Response) => {
   const { page } = req.query;

   if (!page)
      return res.status(404).json({
         message: "page not provided",
      });

   let data = [];

   for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * names.length - 1);
      const name = names[randomIndex];
      if (name) data.push(name);
   }

   if (data.length === 0) {
      return res.status(500).json({
         message: "Failed to get names due to some internal error",
      });
   }

   data = data.slice(0, 10);

   return res.status(200).json({
      message: "success",
      page: page,
      names: data,
   });
});

app.listen(3000, () => {
   console.log("listening");
});
