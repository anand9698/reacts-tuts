import UserLogin, {Profile, Setting, UserKey} from "./UserLogin";

function App(){
  return(
    <div>
      <h1>First Component</h1>
      <UserLogin/>
      <Profile/>
      <Setting/>

      <h5>User Key: {UserKey} </h5>

    </div>
  )
}

export default App;