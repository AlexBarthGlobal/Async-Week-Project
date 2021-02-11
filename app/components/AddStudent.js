import React from 'react';
import { addStudentThunk } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const defaultState = {
//   taskName: '',
//   assignee: '',
// }

class AddStudent extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: '',
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
    const student = {};
    this.props.addStudent({ ...this.state })
  }

  render () {
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form id='add-student' onSubmit={handleSubmit}>

        <label htmlFor='firstName'>
          First Name
        </label>
        <input name='firstName' onChange={handleChange} value={firstName} />

        <label htmlFor='lastName'>
          Last Name
        </label>
        <input name='lastName' onChange={handleChange} value={lastName} />

        <label htmlFor='email'>
          Email Address
        </label>
        <input name='email' onChange={handleChange} value={email} />

        <label htmlFor='imageUrl'>
          Profile Picture
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='gpa'>
          GPA
        </label>
        <input name='gpa' onChange={handleChange} value={gpa} />

        <button type='submit'>Add Student</button>
        <Link to='/'>Cancel</Link>
      </form>
    )
  }
}

export default connect(()=> {
  return {};
}, (dispatch, { history })=> {
  return {
    addStudent: (student)=> dispatch(addStudentThunk(student, history))
  };
})(AddStudent);
