import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function List() {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/students`).then((res) => {
            setList(res.data)
        })
    }, [])
    return (
        <>
            <h1>Day la list</h1>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {list.map((item,index) =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.action}</td>re
                        <td><Link to={`/home/edit/${item.id}`}>Edit</Link></td>
                        <td><button  onClick={(values)=>{
                            axios.delete(`http://localhost:3001/students/${item.id}`,values).then(() => {
                                let newList = [...list]
                                console.log(newList)
                                newList.splice(index,1)
                                setList(newList)
                            })
                        }
                            }>Delete</button></td>

                    </tr>
                )}
            </table>
        </>
    )

}
