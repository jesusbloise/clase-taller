import { useNavigate } from "react-router-dom"


function Home() {

    const navigate = useNavigate()

    const goToProfile = () => {
        navigate('/profile/456')
    }

  return (
    <>
    <div>Home</div>
    <button onClick={goToProfile}>Go To Profile </button>
    </>
  )
}

export default Home