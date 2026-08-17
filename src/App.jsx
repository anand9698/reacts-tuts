
import User from "./User";

function App(){

    // let name = "Peter"
    // let age = 29
    // let email = "peter@test.com"

    let userObject = {
      name: "Peter",
      age: 29,
      email: "peter@test.com"
    }

    let userObject1 = {
      name: "Sam",
      age: 20,
      email: "sam@test.com"
    }

  return(
    <div>

      <h1>App Component</h1>

      {/* <User name="John doe" /> */}
      {/* <User name={name} age={age} email={email} /> */}
      <User user={userObject} />
      <User user={userObject1} />
    </div>
  )
}

export default App;