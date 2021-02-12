import React from 'react';
import { editCampusThunk } from '../redux/campuses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const defaultState = {
//   taskName: '',
//   assignee: '',
// }

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
  }

  componentDidMount () {
      if (this.props.campus) {
          console.log('PROPS ON COMPONENT DID MOUNT')
          console.log(this.props)
          this.setState({
            campusName: this.props.campus[0].campusName,
            address: this.props.campus[0].address,
            imageUrl: this.props.campus[0].imageUrl,
            description: this.props.campus[0].description
          })
      } else if (this.props.altCampus) {
        console.log('ALTERNATE CAMPUS!')
        console.log(this.props.altCampus)
        this.setState({
            campusName: this.props.altCampus.campusName,
            address: this.props.altCampus.address,
            imageUrl: this.props.altCampus.imageUrl,
            description: this.props.altCampus.description
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
    const campus = {};
    this.props.editCampus({ data: { ...this.state }, prevUrl: this.props.location.state, campusId: this.props.match.params.id })
  }

  render () {

    if (this.props) {
        console.log('EDIT CAMPUS PROPS')
        console.log(this.props)
    }

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
        <Link to='/'><button className='formButton'>Cancel</button></Link>
        </div>
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

export default connect(({campuses, campusAndItsStudents}, { match })=> {
    console.log('FROM THE CONNECT')
    if ({campuses}.campuses.data) {
    var campus = {campuses}.campuses.data.filter(campus => campus.id == match.params.id*1);
    } else if ({campusAndItsStudents}) {
        // console.log("CAMPUS AND ITS STUDENTS")
        // console.log(campusAndItsStudents.data[0])
        if (campusAndItsStudents.data) {
        const altCampus = campusAndItsStudents.data[0]
        return {altCampus}
        }
    }
    console.log('AFTER MAP')
    console.log(campus)
    campus = campus || {};
    return {
      campus
    };
  }, (dispatch, { history })=> {
  return {
    editCampus: (campus)=> dispatch(editCampusThunk(campus, history))
  };
})(EditCampus);

//   componentDidMount(){
//     console.log(this.props.location.state) //This is the URL that I'm going to send to the Thunk for history.
//     // console.log(this.props.match.params.id) //This is the Id of the campus That we will load / edit
//     if (this.props.campusInfo) {
//         console.log('PROPS CAMPUS INFO')
//         console.log(this.props.campusInfo)
//         let correctInfo = this.props.campusInfo.map(info => info.id === this.props.match.params)
//         console.log('HERE CORRECT INFO')
//         console.log(correctInfo)

//       this.setState({
//         // campusName: correctInfo.campusName,
//         // address: this.props.campusInfo[(this.props.match.params.id)-1].address,
//         // imageUrl: this.props.campusInfo[(this.props.match.params.id)-1].imageUrl,
//         // description: this.props.campusInfo[(this.props.match.params.id)-1].description
//       });
//     } else if (this.props.campusAndItsStudents) {
//         console.log(this.props.campusAndItsStudents.data[0])
//         this.setState({
//             campusName: this.props.campusAndItsStudents.data[0].campusName,
//             address: this.props.campusAndItsStudents.data[0].address,
//             imageUrl: this.props.campusAndItsStudents.data[0].imageUrl,
//             description: this.props.campusAndItsStudents.data[0].description
//           });
//     } else {
//         //AXIOS Fetch campus by ID
//     }
// }