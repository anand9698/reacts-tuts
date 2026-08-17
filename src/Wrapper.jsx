function Wrapper({children}){
    return(
        <div style={{color:"green", border:"5px solid green", margin:"10px", width:"300px"}}>
            {children}
        </div>
    )
}

export default Wrapper;