import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

const IsLogged = (props) => {
    const {user} = props
    
    if (user.id) {
        return props.props.children
    } else return <Redirect to='/login' />
  }
  
  function mapStateToProps (state) {
    return {
      user: state.userReducer.user
    }
  }
  
export default connect(mapStateToProps, null)(IsLogged)