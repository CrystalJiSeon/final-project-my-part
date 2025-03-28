import { Link, useOutlet } from "react-router-dom";
import CeoNavBar from "./components/CeoNavBar";

function App() {


  const currentOutlet= useOutlet(); 
  return(
      <div className="container">
          <CeoNavBar/>
          <h1>인덱스</h1>
          <div>{currentOutlet}</div>
          
      </div>
  )
}

export default App
