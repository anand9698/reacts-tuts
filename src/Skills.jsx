import { useState } from "react"

function Skills(){

    const [skills,setSkills]= useState([]);

    const handleSkills=(event)=>{
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills([skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>

            <h1>Select Skills</h1>

            <input type="checkbox" onChange={handleSkills} id="python" value="Python"/>
            <label htmlFor="python">Python</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="angular" value="Angular"/>
            <label htmlFor="angular">Angular</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="java" value="JAVA"/>
            <label htmlFor="java">JAVA</label>
            <br />
            <br />
            <input type="checkbox" onChange={handleSkills} id="react" value="React"/>
            <label htmlFor="react">React</label>
            
            <h2>{skills.toString()}</h2>

        </div>
    )
}

export default Skills