export function Home() {
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="What needs to be done?" aria-label="Username"
                       aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value=""
                           aria-label="Radio button for following text input"/>
                </div>
                <input type="text" className="form-control" aria-label="Text input with radio button"/>
            </div>
        </>
    )
}

