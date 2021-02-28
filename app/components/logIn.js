import React from 'react'
import {connect} from 'react-redux'
import {login} from '../redux/isLogged'
import LocalLoginForm from './local-login-form'
import OauthLoginForm from './oauth-login-form'
import {Redirect, Link} from 'react-router-dom'
import Anime, {anime} from 'react-anime';

let flag = 0;

const Login = (props) => {
  const {user, handleSubmit} = props

  console.log('LOGIN PROPS')
  console.log(props)
  
  if (user.id) {
    return <Redirect to='/' />
  }

  if (props.location.state) {
    if (props.location.state.recentlyLogged > 0) {
    var recentLog = (<div className='marginBottom'>Successfully logged out.</div>)
    }
  } 

  if (flag > 0) {
    var message = (<div className='marginBottom'>Invalid email or password.</div>)
    flag = 0;
  }

  // const resetRecentlyLogged = () => {
  //   if (recentLog) {
  //     if (props.location.state) {
  //       if (props.location.state.recentlyLogged) {
  //         props.location.state.recentlyLogged = 0;
  //       }
  //     };
  //   }
  // }

  


  return (
    <Anime delay={anime.stagger(100)} scale={[.1, 1]}><div className='marginTop'>
      <h1>Log In</h1>
      {message}
      {recentLog}
      <div className=''>
        <div className=''>
          <LocalLoginForm handleSubmit={handleSubmit} />
          <OauthLoginForm />
          <Link to={`/signup`}><button>Sign up</button></Link>
        </div>
      </div>
    </div></Anime>
  )
}

const mapStateToProps = (state) => {
  // console.log('login state')
  // console.log(state)
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleSubmit (evt) {
      flag = 1;
      evt.preventDefault()
      const thunk = login({
        email: evt.target.email.value,
        password: evt.target.password.value
      })
      await dispatch(thunk)
      ownProps.history.push('/login');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)