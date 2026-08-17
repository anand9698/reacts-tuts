

function User(data){
    
    return(
        <div>
            <hr />
            <h2>User</h2>
            <h3>{data.user.name}</h3>
            <h3>{data.user.age}</h3>
            <h3>{data.user.email}</h3>
        </div>
    )
}

export default User;
