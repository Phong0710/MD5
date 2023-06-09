import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {createProduct} from "../../../services/productService";

export function Create() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <h1>Create product</h1>
            <Formik
                initialValues={{
                    name:'',
                    price:'',
                    quantity:'',
                    image:'',
                    category:'1',
                    }
                }
                onSubmit={async (values) => {
                    await dispatch(createProduct(values))
                    console.log(values)
                    navigate('/home')
                }}
            >
                <Form>
                    <Field name={'name'} placeholder={'name'}></Field>
                    <Field name={'price'} placeholder={'price'}></Field>
                    <Field name={'quantity'} placeholder={'quantity'}></Field>
                    <Field name={'image'} placeholder={'image'}></Field>
                    <Field as={'select'} name={'category'}>
                        <option value="1">Bánh</option>
                        <option value="2">Kẹo</option>
                    </Field>
                    <button type={"submit"}>Save</button>
                </Form>
            </Formik>

        </>
    )

}