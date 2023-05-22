
import {useNavigate, useParams} from "react-router-dom";
import { Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";

export function Edit() {
    const {id}=useParams();
    const navigate = useNavigate()
    const [student,setStudent]=useState({
        id: '',
        name: '',
        description: '',
        action: ''
    })
    useEffect(()=>{
        axios.get(`http://localhost:3001/students/${id}`).then(res => {
            setStudent(res.data);
    },[id])})
    return (
        <>
           <h1>Edit student</h1>
            <Formik
                initialValues={student}
                enableReinitialize={true}
                onSubmit={(values) => {
                    axios.put(`http://localhost:3001/students/${id}`, values).then(() => {
                        alert('Edit is success ')
                        console.log(values)
                        navigate('/home', {state: {name: 'Linh', isHandsome: 'Sure'}})
                    })
                }}
            >
                <Form>
                    <Field name={'id'} placeholder={'Id'}></Field>
                    <Field name={'name'} placeholder={'name'}></Field>
                    <Field name={'description'} placeholder={'description'}></Field>
                    <Field as={'select'} name={'action'}>
                        <option value="Xem xét">Xem xét</option>
                        <option value="Đạt">Đạt</option>
                        <option value="Tốt">Tốt</option>
                    </Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}