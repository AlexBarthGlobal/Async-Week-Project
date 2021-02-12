import React from 'react';
import { editStudentThunk } from '../redux/students';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const defaultState = {
//   taskName: '',
//   assignee: '',
// }

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
      if (this.props.student) {
          console.log('PROPS ON COMPONENT DID MOUNT')
          console.log(this.props)
          this.setState({
            firstName: this.props.student[0].firstName,
            lastName: this.props.student[0].lastName,
            email: this.props.student[0].email,
            imageUrl: this.props.student[0].imageUrl,
            gpa: this.props.student[0].gpa
          })
      } else if (this.props.altStudent) {
        console.log('ALTERNATE STUDENT!')
        console.log(this.props.altStudent)
        this.setState({
            firstName: this.props.altStudent.firstName,
            lastName: this.props.altStudent.lastName,
            email: this.props.altStudent.email,
            imageUrl: this.props.altStudent.imageUrl,
            gpa: this.props.altStudent.gpa
        })    
      }
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
    this.props.editStudent({ data: { ...this.state }, prevUrl: this.props.location.state, studentId: this.props.match.params.id })
  }

  render () {

    if (this.props) {
        console.log('EDIT STUDENT PROPS')
        console.log(this.props)
    }

    const { firstName, lastName, email, imageUrl, gpa } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <form id='add-campus' onSubmit={handleSubmit}>

        <h2>Edit Student</h2>

        <label htmlFor='firstName'>
          First Name
        </label>
        <input name='firstName' onChange={handleChange} value={firstName} />

        <label htmlFor='lastName'>
          Last Name
        </label>
        <input name='lastName' onChange={handleChange} value={lastName} />

        <label htmlFor='email'>
          email
        </label>
        <input name='email' onChange={handleChange} value={email} />

        <label htmlFor='imageUrl'>
          Profile Image URL
        </label>
        <input name='imageUrl' onChange={handleChange} value={imageUrl} />

        <label htmlFor='gpa'>
          GPA
        </label>
        <input name='gpa' onChange={handleChange} value={gpa} />

        <button type='submit'>Submit Changes</button>
        <Link to='/'>Cancel</Link>
      </form>
    )
  }
}

// const mapState = (state) => {
//     return {
//         campusInfo: state.campuses.data,
//         campusAndItsStudents: state.campusAndItsStudents   
//     }
// }

export default connect(({students, studentAndTheirCampus}, { match })=> {
    console.log('FROM THE CONNECT')
    if ({students}.students.data) {
    var student = {students}.students.data.filter(student => student.id == match.params.id*1);
    } else if ({studentAndTheirCampus}) {
        // console.log("CAMPUS AND ITS STUDENTS")
        // console.log(campusAndItsStudents.data[0])
        if (studentAndTheirCampus.data) {
        const altStudent = studentAndTheirCampus.data[0]
        return {altStudent}
        }
    }
    console.log('AFTER MAP')
    console.log(student)
    student = student || {};
    return {
      student
    };
  }, (dispatch, { history })=> {
  return {
    editStudent: (student)=> dispatch(editStudentThunk(student, history))
  };
})(EditStudent);