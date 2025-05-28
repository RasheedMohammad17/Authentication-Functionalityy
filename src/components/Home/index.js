// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import Header from '../Header'

const Home = props => {
  const removeCookie = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="heading">Home Route</h1>
        <button type="button" className="button" onClick={removeCookie}>
          Logout
        </button>
      </div>
    </>
  )
}

export default Home
