import {Link} from "react-router-dom";


export function Footer(){
    return(
        <>
            <hr/>
            <div className="btn-group">
                <Link to="#" className="btn btn-primary active" aria-current="page">Active link</Link>
                <Link to="#" className="btn btn-primary">Link1</Link>
                <Link to="#" className="btn btn-primary">Link2</Link>
            </div>
        </>
    )
}