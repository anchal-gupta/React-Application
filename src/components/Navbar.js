import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode ==='light' ? 'light' : 'dark'} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link> */}
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <div className="darkmode-group">
          <button type="button" className="btn btn-light btn-circle" style={{display: props.mode === 'light' ? 'none':'inline', color: 'black'}} onClick={props.toggleMode}>White</button>
          <button type="button" className="btn btn-danger btn-circle" onClick={props.toggleRedMode}>Red</button>
          <button type="button" className="btn btn-primary   btn-circle" onClick={props.toggleBlueMode}>Blue</button>
          <button type="button" className="btn btn-success btn-circle" onClick={props.toggleGreenMode}>Green</button>
        </div>
          {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
        </div>
      </div>
    </div>
    </nav>
  )
}
