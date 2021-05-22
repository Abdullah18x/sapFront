import axios from 'axios'


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

let saveAssignment = async (data, token) =>{
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

let assignAssignment = async (assignmentId,sectionId,subjectId,due, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/assignAssignment',{
        assignmentId:assignmentId,
        sectionId:sectionId,
        subjectId:subjectId,
        due:due
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

let getLatestAssignmentId = async (lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getLatestAssignmentId',{
        lecturerId:lecturerId
      }
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



let changeAssignmentStatus = async (assignmentId,status, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/changeAssignmentStatus',{
        assignmentId:assignmentId,
        status:status
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

let getAssignments = async (lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getAll',{
        lecturerId:lecturerId
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
      const response = await axios.post('http://localhost:3000/assignment/getAssignment',{
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

let getAssignedAssignment = async (assignmentId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getAssignedAssignment',{
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

let getAssignedAssignments = async (assignmentId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getAssignedAssignments',{
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

let downloadFile = async (resourceMaterial, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/downloadResourceMaterial',{
        resourceMaterial:resourceMaterial
      },{
        responseType:'arraybuffer',
        headers:{
          Authorization: token
        }
      }
      );
      console.log(response)
      // return response.data
    } catch (error) {
      console.log(error)
      return error
      
    }
}

let updateAssignmentWOF = async (data, token) =>{
  try {
      const response = await axios.patch('http://localhost:3000/assignment/updateAssignmentWOF',data,{
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

let updateAssignmentWF = async (data, token) =>{
  try {
      const response = await axios.patch('http://localhost:3000/assignment/updateAssignmentWF',data,{
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

let deleteAssignment = async (assignmentId,token) => {
  try {
    await axios.delete('http://localhost:3000/assignment/deleteAssignment', {
      headers: {
        Authorization: token
      },
      data: {
        assignmentId: assignmentId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let deleteAssignedAssignment = async (assignmentId,assignedId,token) => {
  try {
    await axios.delete('http://localhost:3000/assignment/deleteAssignedAssignment', {
      headers: {
        Authorization: token
      },
      data: {
        assignmentId:assignmentId,
        assignedId:assignedId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let getSubmittedAssignments = async (assignedId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getSubmittedAssignments',{
        assignedId:assignedId
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

let getPendingStudents = async (assignedId,lecturerId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getPendingStudents',{},{
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

let getStudentSubmission = async (studentId,assignedId, token) =>{
  try {
      const response = await axios.post('http://localhost:3000/assignment/getStudentSubmission',{
        studentId:studentId,
        assignedId:assignedId
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

let gradeAssignment = async (submissionId,marksObtained, token) =>{
  try {
      const response = await axios.patch('http://localhost:3000/assignment/gradeAssignment',{
        submissionId:submissionId,
        marksObtained:marksObtained
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

let deleteStudentSubmission = async (submissionId,token) => {
  try {
    await axios.delete('http://localhost:3000/assignment/deleteStudentSubmission', {
      headers: {
        Authorization: token
      },
      data: {
        submissionId:submissionId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}



export {
  getUser,
  getStudents,
  getLecturerSectionList,
  getSectionSubejct,
  getStatus,
  saveAssignment,
  getLatestAssignmentId,
  assignAssignment,
  changeAssignmentStatus,
  getAssignments,
  getAssignment,
  downloadFile,
  getAssignedAssignment,
  getAssignedAssignments,
  updateAssignmentWOF,
  updateAssignmentWF,
  deleteAssignment,
  deleteAssignedAssignment,
  getSubmittedAssignments,
  getPendingStudents,
  getStudentSubmission,
  gradeAssignment,
  deleteStudentSubmission
}
