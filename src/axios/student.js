import axios from 'axios'

let getStudent = async (studentId, token) =>{
    try {
        const response = await axios.post('http://localhost:3000/student/getStudent',{
            studentId:studentId
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

let getAssignments = async (studentId, token) =>{
    try {
        const response = await axios.post('http://localhost:3000/assignment/getAllStudentAssignments',{
            studentId:studentId
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

  let getAssignment = async (assignmentId, token) =>{
    try {
        const response = await axios.post('http://localhost:3000/assignment/getAssignmentStd',{
          assignmentId:assignmentId
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

  export{
    getStudent,
    getAssignments,
    getAssignment
  }