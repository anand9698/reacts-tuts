
import User from "./User";
import College from "./College"
import Wrapper from "./Wrapper";
import { useState } from "react";
import Skills from "./Skills";
import Gender from "./Gender";

function App(){

   let [val,setVal] = useState()

  return(
    <div>

      <h1>App Component</h1>

        <Gender />

        {/* <Skills /> */}

      {/* <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User name" />
      <br />
      <h2>{val}</h2>
      <button onClick={()=>setVal("")} >Clear</button> */}
     
    </div>
  )
}

export default App;