import axios from 'axios'

let adminLogin = async (userName, password) =>{
    try {
        const response = await axios.post('http://localhost:3000/admin/login',
        {
          userName: userName, 
          password: password
        }
        );
        return response.data
      } catch (error) {
        console.log('It failed')
        console.log(error)
        return error
      }
}

let teacherLogin = async (userName, password) =>{
  try {
      const response = await axios.post('http://localhost:3000/lecturer/login',
      {
        userName: userName, 
        password: password
      }
      );
      return response.data
    } catch (error) {
      console.log('It failed')
      console.log(error)
      return error
    }
}

let studentLogin = async (userName, password) =>{
  try {
      const response = await axios.post('http://localhost:3000/student/login',
      {
        userName: userName, 
        password: password
      }
      );
      return response.data
    } catch (error) {
      console.log('It failed')
      console.log(error)
      return error
    }
}



export {
  adminLogin,
  teacherLogin,
  studentLogin
}