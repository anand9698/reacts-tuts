
import User from "./User";
import College from "./College"
import Wrapper from "./Wrapper";

function App(){

   let collegeName=["IIT", "NIT", "MIT", "AIIMS"]

  return(
    <div>

      <h1>App Component</h1>

        <Wrapper>
          <h1>Hello Everyone</h1>
        </Wrapper>

        <College name={collegeName[0]} /> 
        <College name={collegeName[1]} /> 
        <College name={collegeName[2]} /> 
     
    </div>
  )
}

export default App;