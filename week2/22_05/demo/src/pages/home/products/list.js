import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteProduct, getProduct} from "../../../services/productService";
import {Link} from "react-router-dom";

export function List() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    })
    useEffect(() => {
        dispatch(getProduct());
    }, [])
    const submit = (id)=>{
        dispatch(deleteProduct(id)).then(()=>{
            dispatch(getProduct())
        })
    }
    return (
        <>
            <table border={1}>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Category</td>
                    <td colSpan={2}>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    products.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}$</td>
                                <td>{item.quantity}</td>
                                <td>{item.category.name}</td>
                                <td><Link to={`/home/edit/${item.id}`}>Edit</Link></td>
                                <td><button onClick={() => submit(item.id)}>Delete</button></td>

                            </tr>
                        )
                    )
                }
                </tbody>

            </table>
        </>
    )
}