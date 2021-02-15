import React from 'react';
import { editCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchCampusAndItsStudents} from '../redux/singleCampus'

class EditCampus extends React.Component {
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
  };

  componentDidMount () {
    this.props.loadCampusAndItsStudents(this.props.match.params.id);

    if (this.props.campusAndItsStudents) {
      if (this.props.campusAndItsStudents.data) {
        this.setState({
          campusName: this.props.campusAndItsStudents.data[0].campusName,
          address: this.props.campusAndItsStudents.data[0].address,
          imageUrl: this.props.campusAndItsStudents.data[0].imageUrl,
          description: this.props.campusAndItsStudents.data[0].description     
        })
      }
    } else if (this.props.altCampus) {
      this.setState({
        campusName: this.props.altCampus.campusName,
        address: this.props.altCampus.address,
        imageUrl: this.props.altCampus.imageUrl,
        description: this.props.altCampus.description
      })
    } else if (this.props.campus) {
      if (this.props.campus.campusName) {
        this.setState({
          campusName: this.props.campus[0].campusName,
          address: this.props.campus[0].address,
          imageUrl: this.props.campus[0].imageUrl,
          description: this.props.campus[0].description
        })
      };
    };
  };

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  async handleSubmit (evt) {
    evt.preventDefault()
    this.props.editCampus({ data: { ...this.state }, prevUrl: this.props.location.state, campusId: this.props.match.params.id })
  };

  render () {
    const { campusName, address, imageUrl, description } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className='addEditForm' onSubmit={handleSubmit}>

        <h2>Edit Campus</h2>

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
          <button className='formButton' type='submit'>Submit Changes</button>
          <Link to={`/campuses/${this.props.match.params.id}`}><button className='formButton'>Cancel</button></Link>
        </div>
      </form>
    )
  };
};

export default connect(({campuses, campusAndItsStudents}, { match }) => {
  if ({campuses}.campuses.data) {
    var campus = {campuses}.campuses.data.filter(campus => campus.id == match.params.id*1);
  } else if ({campusAndItsStudents}) {
    if (campusAndItsStudents.data) {
      const altCampus = campusAndItsStudents.data[0]
      return {altCampus};
    }
  }
  campus = campus || {};
  return {
    campus, 
    campusAndItsStudents
  };
}, (dispatch, { history })=> {
  return {
    editCampus: (campus)=> dispatch(editCampusThunk(campus, history)),
    loadCampusAndItsStudents: (id) => dispatch(fetchCampusAndItsStudents(id))
  };
})(EditCampus);