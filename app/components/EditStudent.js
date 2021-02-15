import React from 'react';
import { editStudentThunk } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchStudentAndTheirCampus} from '../redux/singleStudent'

class EditStudent extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: ''
    }; 
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.props.loadStudentAndTheirCampus(this.props.match.params.id);

    if (this.props.studentAndTheirCampus) {
      if (this.props.studentAndTheirCampus.data) {
        this.setState({
          firstName: this.props.studentAndTheirCampus.data[0].firstName,
          lastName: this.props.studentAndTheirCampus.data[0].lastName,
          email: this.props.studentAndTheirCampus.data[0].email,
          imageUrl: this.props.studentAndTheirCampus.data[0].imageUrl,
          gpa: this.props.studentAndTheirCampus.data[0].gpa
        })
      }
    } else if (this.props.altStudent) {
        this.setState({
          firstName: this.props.altStudent.firstName,
          lastName: this.props.altStudent.lastName,
          email: this.props.altStudent.email,
          imageUrl: this.props.altStudent.imageUrl,
          gpa: this.props.altStudent.gpa
        })
      } else if (this.props.student) {
        if (this.props.student.firstName) {
          this.setState({
          firstName: this.props.student[0].firstName,
          lastName: this.props.student[0].lastName,
          email: this.props.student[0].email,
          imageUrl: this.props.student[0].imageUrl,
          gpa: this.props.student[0].gpa
        })
      };
    };
  };


  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  async handleSubmit (evt) {
    evt.preventDefault()
    this.props.editStudent({ data: { ...this.state }, prevUrl: this.props.location.state, studentId: this.props.match.params.id })
  };

  render () {
    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className='addEditForm' onSubmit={handleSubmit}>

        <h2>Edit Student</h2>

        <label htmlFor='firstName'>
          First Name:
        </label>
        <input name='firstName' onChange={handleChange} value={firstName} />

        <label htmlFor='lastName'>
          Last Name:
        </label>
        <input name='lastName' onChange={handleChange} value={lastName} />

        <label htmlFor='email'>
          email:
        </label>
        <input name='email' onChange={handleChange} value={email} />

        <label htmlFor='imageUrl'>
          Profile Image URL:
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='gpa'>
          GPA:
        </label>
        <input name='gpa' onChange={handleChange} value={gpa} />

        <div className='flexRow'>
          <button className='formButton' type='submit'>Submit Changes</button>
          <Link to={`/students/${this.props.match.params.id}`}><button className='formButton'>Cancel</button></Link>
        </div>
      </form>
    )
  };
};

export default connect(({students, studentAndTheirCampus}, { match })=> {
  if ({students}.students.data) {
    var student = {students}.students.data.filter(student => student.id == match.params.id*1);
    } else if ({studentAndTheirCampus}) {
      if (studentAndTheirCampus.data) {
        const altStudent = studentAndTheirCampus.data[0]
        return {altStudent}
      }
    }
    student = student || {};
    return {
      student,
      studentAndTheirCampus
    };
  }, (dispatch, { history })=> {
  return {
    editStudent: (student)=> dispatch(editStudentThunk(student, history)),
    loadStudentAndTheirCampus: (id) => dispatch(fetchStudentAndTheirCampus(id))
  };
})(EditStudent);