import express from "express";

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

app.get("/api/names", (req, res) => {
   const { page } = req.body;
   const data = [];

   for (let i = 0; i < Math.ceil(Math.random() * names.length - 1); i++) {
      const name = names[Math.floor(Math.random() * names.length - 1)];
      if (name) data.push(name);
   }

   if (data.length === 0) {
      return res.status(500).json({
         message: "Failed to get names due to some internal error",
      });
   }

   return res.status(200).json({
      message: "success",
      page: page,
      names: data,
   });
});

app.listen(3000, () => {
   console.log("listening");
});
