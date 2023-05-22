const initialState = {
    students: []
}
export const studentReducer = (currenStudent = initialState, action) => {
    if (action.type === "GET_STUDENTS") {
        let newState = {
            ...currenStudent,
            students: action.payload
        }
        return newState;
    }
    return currenStudent
}