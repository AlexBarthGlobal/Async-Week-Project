import {Redirect} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../redux/isLogged'
import Login from './logIn'

const UserPage = (props) => {
  const {user, logThemOut} = props

  var readyToRedirect

  console.log('PROPS BEFORE LOGOUT')
  console.log(props)

  logThemOut();

  console.log('PROPS AFTER LOGOUT')
  console.log(props)

  // if (user) {
    if (!user.id) {
      console.log('REDIRECTING...')
    readyToRedirect = <Redirect to={{
      pathname: '/login',
      state: {recentlyLogged: 1}
    }}
    />
    // }
  }
    

  return (
    //   <div>
    //     <button className='btn bg-red white p1 rounded' onClick={handleClick}>Logout</button>
    //   </div>
    // <div>
    /* <div>You have successfully logged out.</div> */
    <div>
      {readyToRedirect}
    </div>
    
    /* </div> */
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async logThemOut () {
      const thunk = logout()
      await dispatch(thunk)
      // ownProps.history.push('/login')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)