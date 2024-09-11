import { useParams } from "react-router-dom"




function Profile() {
    const {userId} = useParams()
    const userData = {
        123: { name: 'jesus', email: 'correo@correo.com'},
        456: { name: 'roberto', email: 'correo2@correo.com'}
    }

    const user = userData[userId]
    console.log(user)

    if (!user) {
        return <div>User Not Found</div>
    }


  return (
    <>
    <h1>Profile</h1>
    <p><strong>Name: </strong> {user.name}</p>
    <p><strong>Email: </strong> {user.email}</p>
    <button onClick={()=> window.history.back()}>Go Back</button>
    </>
  )

}

export default Profile