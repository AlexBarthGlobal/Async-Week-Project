import React from 'react'
import {connect} from 'react-redux'
import {signUp} from '../redux/isLogged'
import LocalSignUpForm from './local-signup-form'
import OauthLoginForm from './oauth-login-form'
import {Redirect, Link} from 'react-router-dom'
import {Session} from 'express-session'
import Anime, {anime} from 'react-anime';

let flag = 0;

const SignUp = (props) => {
  const {user, handleSubmit} = props
  
  if (user.id) {
    return <Redirect to='/' />
  }

  if (flag > 0) {
    var message = (<div className='marginBottom'>
                    <div>Email is not available!</div>
                    <div className='marginTop'>Choose a different one.</div>
                  </div>);
    flag = 0;
  }

  return (
    <Anime delay={anime.stagger(100)} scale={[.1, 1]}><div className='marginTop'>
      <h1>Sign Up</h1>
      {message}
      <div className=''>
        <div className=''>
          <LocalSignUpForm handleSubmit={handleSubmit} />
          <Link to={`/login`}><button>Back to Log In</button></Link>
        </div>
      </div>
    </div></Anime>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit (evt) {
      flag = 1;
      evt.preventDefault()
      const thunk = signUp({
        email: evt.target.email.value,
        password: evt.target.password.value
      })
      await dispatch(thunk)
      ownProps.history.push('/signup')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)