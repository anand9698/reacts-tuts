import { useState } from "react";

function Gender(){
   
    const [gender,setGender]= useState("Male");

    const [city,setCity]=useState();

    return(
        <div>

            <h1>Select Gender</h1>

            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
            value={"Male"} checked={gender=="Male"} id="male" />
            <label htmlFor="male">Male</label>


            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
            value={"Female"} checked={gender=="Female"} id="female" />
            <label htmlFor="female">female</label>

            <h2>Selected Gender: {gender}</h2>

            <br /><br />

            <h1 name="city">Select city</h1>

            <select name="city" onChange={(event)=>setCity(event.target.value)} defaultValue={"thane"} >
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="thane">Thane</option>
            </select>

            <h2>Selected City: {city}</h2>
        </div>
    )
}

export default Gender;