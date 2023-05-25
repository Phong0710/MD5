import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {editProduct} from "../../../services/productService";
import {useEffect, useState} from "react";
import customAPI from "../../../services/customAPI";

export function Edit() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: '',
        image: '',
        category: '1',
    })
    useEffect(() => {
        customAPI.get(`products/one/${id}`).then((res) => {
            setProduct(res.data)
        })
    }, [])
    return (
        <>
            <h1>Edit product</h1>
            <Formik
                initialValues={product}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    await dispatch(editProduct({
                        id: id,
                        product: values
                    }))
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