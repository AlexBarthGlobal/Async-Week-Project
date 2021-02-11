import React from 'react';
import { addCampusThunk } from '../redux/addcampus';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const defaultState = {
  taskName: '',
  assignee: '',
}

class AddCampus extends React.Component {
  constructor () {
    super()
    this.state = {
      campusName: '',
      address: '',
      imageUrl: '',
      description: ''
    }; 

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    //   console.log(this.state)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit (evt) {
    evt.preventDefault()
    const campus = {};
    this.props.addCampus({ ...this.state })
  }

  render () {
    const { campusName, address, imageUrl, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id='add-campus' onSubmit={handleSubmit}>

        <label htmlFor='campusName'>
          Campus Name
        </label>
        <input name='campusName' onChange={handleChange} value={campusName} />

        <label htmlFor='address'>
          Campus Location
        </label>
        <input name='address' onChange={handleChange} value={address} />

        <label htmlFor='imageUrl'>
          Campus Image URL
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='campusDescription'>
          Campus Description
        </label>
        <input name='description' onChange={handleChange} value={description} />

        <button type='submit'>Add Campus</button>
        <Link to='/'>Cancel</Link>
      </form>
    )
  }
}

export default connect(()=> {
  return {};
}, (dispatch, { history })=> {
  return {
    addCampus: (campus)=> dispatch(addCampusThunk(campus, history))
  };
})(AddCampus);
















// import React from 'react'
// import { Link } from 'react-router-dom'

// //Come back and fix imageeUrl to imageUrl when you fix CSS
// const AddCampus = (props) => {

//     console.log(props)
   
//     return(
//         <div>
//             Let's add a campus
//         </div>    
//     )
// }

// export default AddCampus