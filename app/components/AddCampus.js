import React from 'react';
import { addCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const defaultState = {
//   taskName: '',
//   assignee: '',
// }

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
    this.props.addCampus({ data: { ...this.state }, prevUrl: '/students' })
  }

  render () {
    const { campusName, address, imageUrl, description } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form className='addEditForm' onSubmit={handleSubmit}>

        <h2>Add Campus</h2>

        <label htmlFor='campusName'>
          Campus Name:
        </label>
        <input name='campusName' onChange={handleChange} value={campusName} />

        <label htmlFor='address'>
          Campus Location:
        </label>
        <input name='address' onChange={handleChange} value={address} />

        <label htmlFor='imageUrl'>
          Campus Image URL:
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='campusDescription'>
          Campus Description:
        </label>
        <input name='description' onChange={handleChange} value={description} />
        <div className='flexRow'>
        <button type='submit' className='formButton'>Submit</button>
        <Link to='/campuses'><button className='formButton'>Cancel</button></Link>
        </div>
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