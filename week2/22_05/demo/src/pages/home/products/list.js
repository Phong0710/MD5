import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProduct} from "../../services/productService";

export function List() {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        console.log(products.list)
        return products.list;
    })
    useEffect(() => {
        dispatch(getProduct())
    }, [])
    return (
        <>
        <table border={1}>
            <thead>

                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>image</td>
                    <td>nameCategory</td>
                </tr>
            </thead>
                <tbody>
                {products.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.image}</td>
                        <td>{item.category.name}</td>

                    </tr>
                ))}

                </tbody>


            </table>

        </>
    )
}