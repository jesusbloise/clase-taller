import { useNavigate } from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/profile/456')
    }
  return (
    <>
        <div>Login Page </div>
        <p> Please log in to access the profile page</p>
        <button onClick={handleLogin}>Go To Login </button>
    </>
  )
}

export default Login