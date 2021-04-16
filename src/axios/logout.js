import axios from 'axios'

let logOut = async (userId, userType) => {
    try {
        const response = await axios.post('http://localhost:3000/logout',
        {
          userId: userId, 
          userType: userType
        }
        );
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    logOut
  }
  