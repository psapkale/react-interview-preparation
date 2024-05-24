import "./App.css";
import { Navbar } from "./components/Navbar";
import { SomeContent } from "./components/SomeContent";
import Providers from "./providers";

function App() {
   return (
      <Providers>
         <Navbar />
         <SomeContent />
      </Providers>
   );
}

export default App;
