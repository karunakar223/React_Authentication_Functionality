// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutBtn = props => {
  const onClickBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logout-container">
      <button type="button" onClick={onClickBtn} className="logout-btn">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutBtn)
