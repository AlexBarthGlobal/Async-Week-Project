import React from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/isLogged'
import LocalLoginForm from './local-login-form'
import OauthLoginForm from './oauth-login-form'
import {Redirect} from 'react-router-dom'
import {Session} from 'express-session'
import Anime, {anime} from 'react-anime';

const Login = (props) => {
  const {user, handleSubmit} = props
  
  if (user.id) {
    return <Redirect to='/' />
  }

  return (
    <Anime delay={anime.stagger(100)} scale={[.1, 1]}><div className='marginTop'>
      <h1>Log In</h1>
      <div className=''>
        {/* <img src='/loggin.png' /> */}
        <div className=''>
          <LocalLoginForm handleSubmit={handleSubmit} />
          <OauthLoginForm />
        </div>
      </div>
    </div></Anime>
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