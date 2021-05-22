import axios from 'axios'

// let logOut = async (userId, userType) => {
//     console.log('here')
//     try {
//         const response = await axios.post('http://localhost:3000/logout',
//         {
//           userId: userId, 
//           userType: userType
//         }
//         );
//         return response.data
//     } catch (error) {
//         console.log(error)
//         return error
//     }
// }

let logOutAdmin = async (userId, userType, token) => {
    try {
      await axios.delete('http://localhost:3000/logout/admin', {
        headers: {
          Authorization: token
        },
        data: {
            userId: userId, 
            userType: userType
        }
      });
      
    } catch (error) {
      console.log(error)
      return error
      
    }
  }

let logOutTeacher = async (userId, userType, token) => {
    try {
      await axios.delete('http://localhost:3000/logout/lecturer', {
        headers: {
          Authorization: token
        },
        data: {
            userId: userId, 
            userType: userType
        }
      });
      
    } catch (error) {
      console.log(error)
      return error
      
    }
  }

  let logOutStudent = async (userId, userType, token) => {
    try {
      await axios.delete('http://localhost:3000/logout/student', {
        headers: {
          Authorization: token
        },
        data: {
            userId: userId, 
            userType: userType
        }
      });
      
    } catch (error) {
      console.log(error)
      return error
      
    }
  }

export {
    logOutAdmin,
    logOutTeacher,
    logOutStudent
  }
  