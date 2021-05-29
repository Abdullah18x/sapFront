import axios from 'axios'

let url = 'http://localhost:3010'

let getUser = async (userId, token) =>{
    try {
        const response = await axios.post(`${url}/lecturer/fetchLecturer`,
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

let getStudent = async (lecturerId,studentId, token) =>{
  try {
      const response = await axios.post(`${url}/student/fetchStudent`,
      {
        lecturerId,lecturerId,
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

let getSectionStudents = async (assignId, token) =>{
  try {
      const response = await axios.post(`${url}/sections/getSectionStudents2`,
      {
        assignId:assignId
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

let getStudents = async (lecturerId, token) =>{
  try {
      const response = await axios.post(`${url}/student/fetchStudents`,
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

let getLecturerAtRiskStudents = async (lecturerId, token) =>{
  try {
      const response = await axios.post(`${url}/student/getLecturerAtRiskStudents`,
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
      const response = await axios.post(`${url}/lecturer/getLecturerSectionList`,
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
      const response = await axios.post(`${url}/lecturer/getSectionSubjectList`,
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
      const response = await axios.post(`${url}/lecturer/getLectrerStatus`,
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
      const response = await axios.post(`${url}/assignment/createAssignment`,
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
      const response = await axios.post(`${url}/assignment/assignAssignment`,{
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
      const response = await axios.post(`${url}/assignment/getLatestAssignmentId`,{
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
      const response = await axios.post(`${url}/assignment/changeAssignmentStatus`,{
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
      const response = await axios.post(`${url}/assignment/getAll`,{
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
      const response = await axios.post(`${url}/assignment/getAssignment`,{
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

let getAssignedAssignment = async (assignedId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getAssignedAssignment`,{
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

let getAssignedAssignments = async (assignmentId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getAssignedAssignments`,{
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
      const response = await axios.post(`${url}/assignment/downloadResourceMaterial`,{
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
      const response = await axios.patch(`${url}/assignment/updateAssignmentWOF`,data,{
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
      const response = await axios.patch(`${url}/assignment/updateAssignmentWF`,data,{
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
    await axios.delete(`${url}/assignment/deleteAssignment`, {
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
    await axios.delete(`${url}/assignment/deleteAssignedAssignment`, {
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

let removeStudentFromSection = async (studentId,token) => {
  try {
    await axios.delete(`${url}/student/removeStudentFromSection`, {
      headers: {
        Authorization: token
      },
      data: {
        studentId:studentId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let getSubmittedAssignments = async (lecturerId, assignedId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getSubmittedAssignments`,{
        assignedId:assignedId,
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

let getPendingStudents = async (assignedId,lecturerId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getPendingStudents`,{
        lecturerId:lecturerId,
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

let getStudentSubmission = async (studentId,assignedId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getStudentSubmission`,{
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

let getRecentSubmissions = async (lecturerId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getRecentSubmissions`,{
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

let getRecentSTDSubmissions = async (lecturerId,studentId, token) =>{
  try {
      const response = await axios.post(`${url}/assignment/getRecentSTDSubmissions`,{
        lecturerId:lecturerId,
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

let getLecturerSections = async (lecturerId, token) =>{
  try {
      const response = await axios.post(`${url}/sections/getLecturerSections`,{
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

let gradeAssignment = async (submissionId,marksObtained, token) =>{
  try {
      const response = await axios.patch(`${url}/assignment/gradeAssignment`,{
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
    await axios.delete(`${url}/assignment/deleteStudentSubmission`, {
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

let getAssignedAssignmentsStats = async (lecturerId,sectionId, subjectId, token) =>{
  try {
      const response = await axios.post(`${url}/sections/getAssignedAssignmentsStats`,{
        lecturerId:lecturerId,
        sectionId:sectionId,
        subjectId:subjectId
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

let getStudentsStats = async (lecturerId,sectionId, subjectId, token) =>{
  try {
      const response = await axios.post(`${url}/sections/getStudentsStats`,{
        sectionId:sectionId,
        subjectId:subjectId,
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

let saveAtRiskStudents = async (dataSTD,assignId, token) =>{
  try {
      const response = await axios.post(`${url}/sections/saveAtRiskStudents`,{
        dataSTD:dataSTD,
        assignId:assignId
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

let getDataSets = async (token) => {
  try {
    const response = await axios.post(`${url}/dataSet/getDataSets2`,{},
    {
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



export {
  getUser,
  getStudent,
  getStudents,
  getSectionStudents,
  getLecturerAtRiskStudents,
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
  getRecentSubmissions,
  getLecturerSections,
  gradeAssignment,
  deleteStudentSubmission,
  removeStudentFromSection,
  getRecentSTDSubmissions,
  getAssignedAssignmentsStats,
  getStudentsStats,
  saveAtRiskStudents,
  getDataSets
}
