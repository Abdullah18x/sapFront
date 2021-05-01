import axios from 'axios'


let getUser = async (userId, token) =>{
    try {
        const response = await axios.post('http://localhost:3000/admin/fetchAdmin',
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
    const response = await axios.post('http://localhost:3000/lecturer/fetchLecturers',{},
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
    const response = await axios.post('http://localhost:3000/lecturer/adminFetchLecturer',{
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
    const response = await axios.post('http://localhost:3000/lecturer/getAssignedSections',{
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

let getSections = async (token) => {
  try {
    const response = await axios.post('http://localhost:3000/sections/getSections',{},
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
    const response = await axios.post('http://localhost:3000/sections/getSection',
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
    const response = await axios.post('http://localhost:3000/subjects/getSubjects',{},
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
    await axios.post('http://localhost:3000/lecturer/addL',{
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

let getLecturerByUserName = async (userName,token) => {
  try {
    let response = await axios.post('http://localhost:3000/lecturer/adminFetchLecturerUserName',{
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
    await axios.post('http://localhost:3000/lecturer/assignLecturer',{
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

let updateLecturerStatus = async (username, status, token) => {
  try {
    await axios.patch('http://localhost:3000/lecturer/updateLecturerStatus',{
      userName:username,
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
    let response = await axios.post('http://localhost:3000/sections/getRecentSections',{},
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
    let response = await axios.post('http://localhost:3000/sections/getlecturerAtRiskStudents',{},
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
    let response = await axios.post('http://localhost:3000/sections/getAlllecturerAtRiskStudents',{},
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
    let response = await axios.post('http://localhost:3000/admin/getStats',{},
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
    let response = await axios.post('http://localhost:3000/sections/getAssignedLecturers',
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
    const response = await axios.post('http://localhost:3000/sections/getSectionStudents',
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

let getLecturerStudents = async (lecturerId,sectionId,subjectId,token) => {
  try {
    const response = await axios.post('http://localhost:3000/student/getLecturerStudents',
    {
      sectionId:sectionId,
      lecturerId:lecturerId,
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

let addSection = async (section,token) => {
  try {
    const response = await axios.post('http://localhost:3000/sections/addSection',
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
    let response = await axios.patch('http://localhost:3000/sections/updateSection',
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
    await axios.delete('http://localhost:3000/sections/removeSection', {
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
    const response = await axios.post('http://localhost:3000/student/getAtRiskStudents',{},
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
    const response = await axios.post('http://localhost:3000/student/getAll',{},
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
    let response = await axios.post('http://localhost:3000/lecturer/unAssignLecturer',
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
    await axios.delete('http://localhost:3000/lecturer/deleteL', {
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
  addLecturer,
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
  removeTeacher
}
