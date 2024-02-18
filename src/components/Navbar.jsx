import React from 'react'

export default function Navbar(props) {

    
    const handleClick = () => {
        props.toggleMode();
    }

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    
                </ul>
                
                {/* <button className="btn btn-success" type="submit" onClick={handleClick}>{props.modeName} Mode</button> */}
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="toggleMode" onChange={handleClick}/>
                    <label class="form-check-label " htmlFor="toggleMode" style={{color: "black"}}>Enable {props.modeName} mode</label>
                </div>

                
                </div>
            </div>
        </nav>
    </>
  )
}
