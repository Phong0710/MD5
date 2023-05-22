import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';

const SchemaError = Yup.object().shape({
    id: Yup.number()
        .min(2, "Too Short!")
        .required("Required"),
    name: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too Short!")
        .required("Required")
});

export function Create() {
    const navigate = useNavigate()
    return (
        <>
            <h1>Create student</h1>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    description: '',
                    action: ''
                }}
                validationSchema={SchemaError}
                onSubmit={(values) => {
                    axios.post(`http://localhost:3001/students`, values).then(() => {
                        alert('Create is success ')
                        navigate('/home', {state: {name: 'Linh', isHandsome: 'Sure'}})
                    })
                }}
            >
                <Form>
                    <Field name={'id'} placeholder={'Id'}></Field>
                    <p style={{color: 'red'}}><ErrorMessage name={'id'}/></p>
                    <Field name={'name'} placeholder={'name'}></Field>
                    <p style={{color: 'red'}}><ErrorMessage name={'name'}/></p>
                    <Field name={'description'} placeholder={'description'}></Field>
                    <p style={{color: 'red'}}><ErrorMessage name={'description'}/></p>
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