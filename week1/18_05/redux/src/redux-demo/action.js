import axios from "axios";

export const getStudents = () => {
    return async (dispatch) => {
        let res = await axios.get('http://localhost:3001/students')
        dispatch({
            type: 'GET_STUDENTS',
            payload: res.data
        })
    }
}
export const createStudents = (values) => {
    return async (dispatch) => {
         await axios.post('http://localhost:3001/students',values)
        console.log(values)
        dispatch({
            type: 'POST_STUDENTS',
            payload: values
        })
    }
}
export const editStudents = (values,id) => {
    return async (dispatch) => {
        await axios.put(`http://localhost:3001/students/${id}`, values)
        console.log(values)
        dispatch({
            type: 'POST_STUDENTS',
            payload: values
        })
    }
}