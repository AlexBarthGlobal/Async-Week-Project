import React from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import {COINBASE_CHECKOUT} from '../../secrets'
import {COINBASE_SCRIPT} from '../../secrets'

const Donate = () => {

  console.log(COINBASE_CHECKOUT)

return (
<div>
  <a className="donate-with-crypto"
     href={COINBASE_CHECKOUT}>
    <button>Donate with Crypto</button>
  </a>
  <script src={COINBASE_SCRIPT}>
  </script>
</div>
)

}

export default Donate