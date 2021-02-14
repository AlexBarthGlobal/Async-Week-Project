import React from 'react';
import { addStudentThunk } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
  };

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  async handleSubmit (evt) {
    evt.preventDefault()
    this.props.addStudent({ ...this.state })
  };

  render () {
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className='addEditForm' onSubmit={handleSubmit}>

       <h2>Add Student</h2>

        <label htmlFor='firstName'>
          First Name:
        </label>
        <input name='firstName' onChange={handleChange} value={firstName} />

        <label htmlFor='lastName'>
          Last Name:
        </label>
        <input name='lastName' onChange={handleChange} value={lastName} />

        <label htmlFor='email'>
          Email Address:
        </label>
        <input name='email' onChange={handleChange} value={email} />

        <label htmlFor='imageUrl'>
          Profile Picture:
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='gpa'>
          GPA:
        </label>
        <input name='gpa' onChange={handleChange} value={gpa} />

        <div className='flexRow'>
          <button className='formButton' type='submit'>Submit</button>
          <Link to='/students'><button className='formButton'>Cancel</button></Link>
        </div>
      </form>
    )
  };
};

export default connect(()=> {
  return {};
}, (dispatch, { history })=> {
  return {
    addStudent: (student)=> dispatch(addStudentThunk(student, history))
  };
})(AddStudent);