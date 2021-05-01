import axios from 'axios'
var FormData = require('form-data');


let getUser = async (userId, token) =>{
    try {
        const response = await axios.post('http://localhost:3000/lecturer/fetchLecturer',
        {
            lecturerId: userId
        },{
          headers:{
            Authorization: token
          }
        }
        );
        return response.data[0]
      } catch (error) {
        console.log(error)
        return error
        
      }
}

let getStudents = async (lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/student/fetchStudents',
      {
          lecturerId: lecturerId
      },{
        headers:{
          Authorization: token
        }
      }
      );
      return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

let getLecturerSectionList = async (lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/lecturer/getLecturerSectionList',
      {
          lecturerId: lecturerId
      },{
        headers:{
          Authorization: token
        }
      }
      );
      return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

let getSectionSubejct = async (lecturerId, sectionId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/lecturer/getSectionSubjectList',
      {
          lecturerId: lecturerId,
          sectionId:sectionId
      },{
        headers:{
          Authorization: token
        }
      }
      );
      return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

let getStatus = async (lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/lecturer/getLectrerStatus',
      {
          lecturerId: lecturerId
      },{
        headers:{
          Authorization: token
        }
      }
      );
      return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

let saveAssignment = async (data,lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/createAssignment',
        data
      ,{
        headers:{
          Authorization: token
        }
      }
      );
      return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

// const saveAssignment = (data,lecturerId, token) => {
  

//   axios.post("http://localhost:3000/assignment/createAssignment", 
//   {data},
//   {
//             headers:{
//               Authorization: token
//             }
//           }
//   )
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// };


export {
  getUser,
  getStudents,
  getLecturerSectionList,
  getSectionSubejct,
  getStatus,
  saveAssignment
}
