import React from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/isLogged'
import LocalLoginForm from './local-login-form'
import OauthLoginForm from './oauth-login-form'
import {Redirect} from 'react-router-dom'
import {Session} from 'express-session'

const Login = (props) => {
  const {user, handleSubmit} = props
  
  if (user.id) {
    return <Redirect to='/' />
  }

  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <h1>Log In</h1>
      <div className='flex w50'>
        {/* <img src='/loggin.png' /> */}
        <div className='grow1'>
          <LocalLoginForm handleSubmit={handleSubmit} />
          <OauthLoginForm />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log('HERES SOME STATE')
    console.log(state)
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit (evt) {
      evt.preventDefault()
      // trigger thunk (AJAX login request)
      const thunk = login({
        email: evt.target.email.value,
        password: evt.target.password.value
      })
      await dispatch(thunk)
      // once that is complete, change the URL to /home
      ownProps.history.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)