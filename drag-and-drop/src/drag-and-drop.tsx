import { useState } from "react";
import Container from "./container";
import { data } from "./utils";

export type StatusType = "good" | "bad" | "normal";

export type ItemType = {
   id: number;
   name: string;
   status: StatusType;
};

const containerList: StatusType[] = ["good", "bad", "normal"];

const DragNDrop = () => {
   const [heroData, setHeroData] = useState<ItemType[]>(data);

   const handleUpdateList = (id: number, status: StatusType) => {
      const hero = heroData.find((x) => x.id === id);

      if (hero && status) {
         hero.status = status;
         const newData = [hero, ...heroData.filter((x) => x.id !== id)];

         setHeroData(newData);
      }
   };

   return (
      <div className="wrapper">
         {containerList.map((status) => (
            <Container
               status={status}
               heroData={heroData}
               handleUpdateList={handleUpdateList}
            />
         ))}
      </div>
   );
};

export default DragNDrop;
