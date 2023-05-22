import {Navbar} from "../../components/navbar";

export function Home(){
    return(
        <>
            <Navbar/>
            <div className="row">
                <table border={1}  >
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </table>
            </div>

        </>
    )
}