// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-links">
      <li className="nav-link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-link-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
