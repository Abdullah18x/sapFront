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
export {
  getUser
}
