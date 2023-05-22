import {useEffect, useState} from "react";

let count = 2;
const list = [
    {
        id: 0,
        name: "phong",
        age: 25,
    },
    {
        id: 1,
        name: "duy",
        age: 27,
    },
]

export function Home() {
    const [users, setUsers] = useState([])
    let [id, setId] = useState('')
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    useEffect(() => {
        setUsers(list)
    }, [])
    let add = () => {
        let user = {
            id: count++,
            name: name,
            age: age
        }
        let newUser = [...users]
        newUser.push(user)
        setUsers(newUser)
        setName('');
        setAge('')

    }
    let remove = (id) => {
        let newList = [...users]
        let index = newList.findIndex((e) => {
            return (e.id === id)
        })
        newList.splice(index, 1);
        setUsers(newList)
    }
    let edit = (id)=>{
        let newList = [...users]
        let index = newList.findIndex((e) => {
            return (e.id === id)
        })
        newList[index] = {id:id,name: name, age: age}
        setUsers(newList)
        setName('')
        setAge('')
        console.log(users,'user')
    }

    return (
        <>
            <input type="hidden" value={id} onChange={(e) => {
                setId(e.target.value)
            }}/>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input type="text" value={age} onChange={(e) => {
                setAge(e.target.value)
            }}/>
            <button onClick={add}>add</button>
            {
                users.map(item => (
                    <div>
                        <h2>{item.id}, Name: {item.name} | Age: {item.age}</h2>
                        <button onClick={() => {
                            remove(item.id)
                        }} >Delete
                        </button>
                        <button onClick={() => {
                            edit(item.id)
                        }} >Edit
                        </button>

                    </div>
                ))
            }
        </>
    )
}

