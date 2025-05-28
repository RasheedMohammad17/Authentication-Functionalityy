// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li className="link">Home</li>
    </Link>
    <Link to="/about">
      <li className="link">About</li>
    </Link>
  </ul>
)

export default Header
