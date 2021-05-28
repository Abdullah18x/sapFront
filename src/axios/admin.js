import axios from 'axios'

let url = 'http://localhost:3010'
let getUser = async (userId, token) =>{
    try {
        const response = await axios.post(`${url}/admin/fetchAdmin`,
        {
          adminId: userId
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

let getLecturerList = async (token) => {
  try {
    const response = await axios.post(`${url}/lecturer/fetchLecturers`,{},
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

let getLecturer = async (lecturerId,token) => {
  try {
    const response = await axios.post(`${url}/lecturer/adminFetchLecturer`,{
      lecturerId:lecturerId
    },
    {
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

let getAssignedSections = async (lecturerId,token) => {
  try {
    const response = await axios.post(`${url}/lecturer/getAssignedSections`,{
      lecturerId:lecturerId
    },
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

let getLecturerAssignedSection = async (sectionId,subjectId,token) => {
  try {
    const response = await axios.post(`${url}/lecturer/getLecturerAssignedSection`,{
      subjectId:subjectId,
      sectionId:sectionId
    },
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

let getSections = async (token) => {
  try {
    const response = await axios.post(`${url}/sections/getSections`,{},
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

let getSection = async (sectionsId,token) => {
  try {
    const response = await axios.post(`${url}/sections/getSection`,
    {
      sectionId:sectionsId
    },
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

let getSubjects = async (token) => {
  try {
    const response = await axios.post(`${url}/subjects/getSubjects`,{},
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

let saveDataSet = async (data, token) =>{
  try {
      const response = await axios.post(`${url}/dataSet/createDataSet`,
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

let insertSubject = async (subject,token) => {
  try {
    const response = await axios.post(`${url}/subjects/insertSubject`,{
      subject:subject
    },
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

let updateSubject = async (subjectId, subject,token) => {
  try {
    const response = await axios.patch(`${url}/subjects/updateSubject`,{
      subject:subject,
      subjectId:subjectId
    },
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

let addLecturer = async (userName, password, email, name, status, token) => {
  try {
    await axios.post(`${url}/lecturer/addL`,{
      userName:userName,
      password:password,
      email:email,
      name:name,
      status:status
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
  } catch (error) {
    console.log(error)
    return error
    
  }
}
let addStudent = async (userName, password, email, name, rollNo, token) => {
  try {
    await axios.post(`${url}/student/addS`,{
      userName:userName,
      password:password,
      email:email,
      name:name,
      rollNo:rollNo
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let getStudent = async (studentId, token) => {
  try {
    await axios.post(`${url}/student/fetchStudentA`,{
      studentId:studentId
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let getLecturerByUserName = async (userName,token) => {
  try {
    let response = await axios.post(`${url}/lecturer/adminFetchLecturerUserName`,{
      userName:userName
    },
    {
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


let assignLecturer = async (lecturerId, subjectId, sectionId, programmingLanguageId, token) => {
  try {
    await axios.post(`${url}/lecturer/assignLecturer`,{
      lecturerId:lecturerId,
      subjectId:subjectId,
      sectionId:sectionId,
      programmingLanguageId:programmingLanguageId
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let updateLecturerStatus = async (lecturerId, status, token) => {
  try {
    await axios.patch(`${url}/lecturer/updateLecturerStatus`,{
      lecturerId:lecturerId,
      status:status
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let recentSections = async (token) => {
  try {
    let response = await axios.post(`${url}/sections/getRecentSections`,{},
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

let lecturerAtRiskStudents = async (token) => {
  try {
    let response = await axios.post(`${url}/sections/getlecturerAtRiskStudents`,{},
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

let alllecturerAtRiskStudents = async (token) => {
  try {
    let response = await axios.post(`${url}/sections/getAlllecturerAtRiskStudents`,{},
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

let getStats = async (token) => {
  try {
    let response = await axios.post(`${url}/admin/getStats`,{},
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

let getAssignedLecturers = async (sectionId,token) => {
  try {
    let response = await axios.post(`${url}/sections/getAssignedLecturers`,
    {
      sectionId:sectionId
    },
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

let getSectionStudents = async (sectionId,token) => {
  try {
    const response = await axios.post(`${url}/sections/getSectionStudents`,
    {
      sectionId:sectionId
    },
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

let getLecturerStudents = async (lecturerId,assignId,token) => {
  try {
    const response = await axios.post(`${url}/student/getLecturerStudents`,
    {
      assignId:assignId,
      lecturerId:lecturerId
    },
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

let addSection = async (section,token) => {
  try {
    const response = await axios.post(`${url}/sections/addSection`,
    {
      section:section
    },
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


let updateSection = async (section,sectionId,token) => {
  try {
    let response = await axios.patch(`${url}/sections/updateSection`,
    {
      sectionId:sectionId,
      section:section
    },
    {
      headers:{
        Authorization: token
      }
    }
    );
    return response
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let removeSection = async (sectionId,token) => {
  try {
    await axios.delete(`${url}/sections/removeSection`, {
      headers: {
        Authorization: token
      },
      data: {
        sectionId: sectionId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}

let getAtRiskStudents = async (token) => {
  try {
    const response = await axios.post(`${url}/student/getAtRiskStudents`,{},
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

let getStudents = async (token) => {
  try {
    const response = await axios.post(`${url}/student/getAll`,{},
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

let unAssignTeacher = async (lecturerId,sectionId,subjectId,token) => {
  try {
    let response = await axios.post(`${url}/lecturer/unAssignLecturer`,
    {
      lecturerId:lecturerId,
      sectionId:sectionId,
      subjectId:subjectId
    },
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

let removeTeacher = async (lecturerId,token) => {
  try {
    await axios.delete(`${url}/lecturer/deleteL`, {
      headers: {
        Authorization: token
      },
      data: {
        lecturerId: lecturerId
      }
    });
    
  } catch (error) {
    console.log(error)
    return error
    
  }
}

export {
  getUser,
  getLecturerList,
  getLecturer,
  getAssignedSections,
  getSections,
  getSection,
  getSubjects,
  insertSubject,
  addLecturer,
  addStudent,
  getLecturerByUserName,
  assignLecturer,
  updateLecturerStatus,
  recentSections,
  lecturerAtRiskStudents,
  alllecturerAtRiskStudents,
  getStats,
  getAssignedLecturers,
  getSectionStudents,
  getLecturerStudents,
  addSection,
  updateSection,
  removeSection,
  getAtRiskStudents,
  getStudents,
  unAssignTeacher,
  removeTeacher,
  getLecturerAssignedSection,
  updateSubject,
  saveDataSet
}
