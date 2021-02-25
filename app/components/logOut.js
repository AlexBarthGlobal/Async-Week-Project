import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../redux/isLogged'

const UserPage = (props) => {
  const {user, handleClick} = props

  handleClick();

  return (
    //   <div>
    //     <button className='btn bg-red white p1 rounded' onClick={handleClick}>Logout</button>
    //   </div>
    <Redirect to='/' />
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    async handleClick () {
      const thunk = logout()
      await dispatch(thunk)
      ownProps.history.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)