import "./App.css";
import { Slider } from "./components/Slider";
import img1 from "/img1.png";
import img2 from "/img2.jpg";
import img3 from "/img3.png";
import img4 from "/img4.png";
import img5 from "/img5.png";

const sliderData = [img1, img2, img3, img4, img5];

function App() {
   return (
      <div>
         <Slider imgData={sliderData} />
      </div>
   );
}

export default App;
