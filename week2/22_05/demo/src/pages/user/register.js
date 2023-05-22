import {Link} from "react-router-dom";

export function Register(){
    return(
        <>
            <center>
                <h3> Trang register</h3>
                <input type="text" placeholder={'Username'} name={'username'}/>
                <input type="text" placeholder={'Password'} name={'Password'}/>
                <Link to={'/login'}>Dang nhap</Link>
                <button type={'submit'}>Dang nhap</button>
            </center>
        </>
    )
}