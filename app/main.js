import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import store from './store'
import {Routes} from './components/Routes'
import {fetchMe} from '../app/redux/isLogged'

const Main = class extends Component {
  componentDidMount () {
    this.props.fetchMe()
  }

  render () {
    if (this.props.user.isFetching) {
      return (
        <h1>Loading...</h1>
      )
    }
    return (
      <Routes props={this.props} />
    )
  }
}

function mapStateToProps (state) {
  console.log('from main js')
  console.log(state)
  return { 
    user: state.userReducer.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMe: () => dispatch(fetchMe())
})

const WrappedMain = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

render(
  <Provider store={store}>
    <Router>
    <WrappedMain />
    </Router>
  </Provider>,
  document.getElementById('main')
)