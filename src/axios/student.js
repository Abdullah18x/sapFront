import axios from 'axios'

let url = 'http://localhost:3010'

let getStudent = async (studentId, token) =>{
    try {
        const response = await axios.post(`${url}/student/getStudent`,{
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
        const response = await axios.post(`${url}/assignment/getAllStudentAssignments`,{
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
        const response = await axios.post(`${url}/assignment/getAssignmentStd`,{
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

  let getStudentSubmissionS = async (assignedId,studentId, token) =>{
    try {
        const response = await axios.post(`${url}/assignment/getStudentSubmissionS`,{
          assignedId: assignedId,
          studentId: studentId
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

  let getStudentSubmissionS2 = async (assignedSId,studentId, token) =>{
    try {
        const response = await axios.post(`${url}/dataSet/getStudentSubmissionS`,{
          assignedSId: assignedSId,
          studentId: studentId
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

  let getDataSets = async (studentId, token) =>{
    try {
        const response = await axios.post(`${url}/dataSet/getDataSets3`,{
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
  let getDataSet = async (datasetId, token) =>{
    try {
        const response = await axios.post(`${url}/dataSet/getDataSet3`,{
          datasetId:datasetId
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
    getAssignment,
    getStudentSubmissionS,
    getDataSets,
    getStudentSubmissionS2,
    getDataSet
  }