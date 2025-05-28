// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  LoginFun = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userData = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const {history} = this.props
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 2})
      history.replace('/')
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="home-container">
        <h1 className="heading">Please Login</h1>
        <button type="button" className="button" onClick={this.LoginFun}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
