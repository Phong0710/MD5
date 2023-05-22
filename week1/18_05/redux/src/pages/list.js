import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getStudents} from "../redux-demo/action";
import {Link} from "react-router-dom";
import axios from "axios";
export function List() {
    const dispatch = useDispatch()
    const students = useSelector(({students}) => {
        return students
    })
    useEffect(() => {
        dispatch(getStudents())
    },[])
    return (
        <>
            <h1>Day la list-students</h1>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {students.map((item) =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.action}</td>
                        <td><Link to={`/home/edit/${item.id}`}>Edit</Link></td>
                        <td><button  onClick={()=>{
                            axios.delete(`http://localhost:3001/students/${item.id}`).then(() => {
                              dispatch(getStudents())
                            })
                        }
                            }>Delete</button></td>

                    </tr>
                )}
            </table>
        </>
    )

}
