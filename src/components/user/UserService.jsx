const UserService = ({userServices}) => {
  return (
    <div>
       <h1>You Services</h1>
         {userServices?.map(service=>{
            return <p>{service}</p>
         })}
    </div>
  )
}

export default UserService
