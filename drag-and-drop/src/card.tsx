import React from "react";
import { ItemType } from "./drag-and-drop";

interface Props {
   item: ItemType;
}

const Card = ({ item }: Props) => {
   const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
      e.dataTransfer?.setData("text", `${item.id}`);
   };

   const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault();
   };

   return (
      <div
         className="card"
         draggable
         onDragStart={handleDragStart}
         onDragEnd={handleDragEnd}
      >
         {item.name}
      </div>
   );
};

export default Card;
