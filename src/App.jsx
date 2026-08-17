import { useState } from "react";
import UserLogin from "./UserLogin";

function App(){
  
  const [fruit, setFruit] = useState("Apple")

  const change=()=>{
    setFruit("Banana")
  }

  const showB=()=>{
    setShow(!show)
  }

const [show, setShow]=useState(true)

  return(
    <div>

    <h2>{fruit}</h2>

    <button onClick={change}>Change Name</button>

    <button onClick={showB}>Show</button>

    {
        show? <UserLogin/> : null
     }

    </div>
  )
}

export default App;