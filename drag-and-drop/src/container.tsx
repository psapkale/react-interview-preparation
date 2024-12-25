import Card from "./card";
import { ItemType, StatusType } from "./drag-and-drop";

interface Props {
   status: StatusType;
   heroData: ItemType[];
   handleUpdateList: (id: number, status: StatusType) => void;
}

const Container = ({ status, heroData, handleUpdateList }: Props) => {
   const handleDrop = (e: React.DragEvent<HTMLElement>) => {
      e.preventDefault();
      handleUpdateList(+e.dataTransfer?.getData("text"), status);
   };

   const handleDragOver = (e: React.DragEvent<HTMLElement>) =>
      e.preventDefault();

   return (
      <div
         className="container"
         onDrop={handleDrop}
         onDragOver={handleDragOver}
      >
         <h1>{status} hero</h1>
         {heroData.map(
            (item) => item.status === status && <Card item={item} />
         )}
      </div>
   );
};

export default Container;
