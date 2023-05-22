
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';


import {useDispatch} from "react-redux";
import {createStudents} from "../redux-demo/action";
import {useNavigate} from "react-router-dom";

const SchemaError = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too Short!")
        .required("Required")
});

export function Create() {
    const dispatch = useDispatch()
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
                    // console.log(values)
                    // axios.post(`http://localhost:3001/students`, values).then((res) => {
                    //     console.log(res.data)
                    //     alert('Create is success ')

                    dispatch(createStudents(values))
                    navigate('/home')
                    // })
                }}
            >
                <Form>
                    <Field name={'name'} placeholder={'name'}></Field>
                    <p style={{color: 'red'}}><ErrorMessage name={'name'}/></p>
                    <Field name={'description'} placeholder={'description'}></Field>
                    <p style={{color: 'red'}}><ErrorMessage name={'description'}/></p>
                    <Field as={'select'} name={'action'}>
                        <option value="Xem xét">Xem xét</option>
                        <option value="Đạt">Đạt</option>
                        <option value="Tốt">Tốt</option>
                    </Field>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>

        </>
    )
}