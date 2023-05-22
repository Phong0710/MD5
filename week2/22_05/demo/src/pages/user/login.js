import {Link} from "react-router-dom";

export function Login(){
    return(
        <>
        <center>
            <h3> Trang Login</h3>
            <input type="text" placeholder={'Username'} name={'username'}/>
            <input type="text" placeholder={'Password'} name={'Password'}/>
            <Link to={'/register'}>Dang ky</Link>
            <button type={'submit'}>Dang nhap</button>
        </center>
        </>
    )
}