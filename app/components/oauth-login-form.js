import React from 'react'

const OauthLoginForm = (props) => {
  return (
    <form method='get' action='/auth/google'>
      <button type='submit' className='btn bg-red white p1 rounded'>Log In with Google</button>
    </form>
  )
}

export default OauthLoginForm