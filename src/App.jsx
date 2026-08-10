import UserLogin, {Profile, Setting, UserKey} from "./UserLogin";

function App(){
  const name = "Anand"
  let x = 20
  let y = 30

  function operation(a,b,op){
    if(op=="+"){
      return a+b;
    }else if(op=="-"){
      return a-b
    }else{
      return a*b
    }
  }
  return(
    <div>
      <h1>First Component</h1>
      <UserLogin/>
      <Profile/>
      <Setting/>

      <h5>User Key: {UserKey} </h5>
      <h6>User Name:{name?name:"User Not Found"}</h6>
      <h6>Mul: {x*y}</h6>

      <h3>{operation(2,5,"")}</h3>

      <button onClick={() => alert("Hello")}>Click</button>
    </div>
  )
}

export default App;