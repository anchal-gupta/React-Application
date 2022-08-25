import React from 'react'
import Navbar from '../Navbar'
import PropTypes from 'prop-types'
import Alerts from '../Alerts'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

export default function Header(props) {

  return (
    <>
    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" aboutText = "About" mode={props.mode} toggleMode={props.toggleMode} toggleRedMode={props.toggleRedMode} toggleBlueMode={props.toggleBlueMode} toggleGreenMode={props.toggleGreenMode} />
    {/* </BrowserRouter> */}
      <Alerts alert={props.alert}/>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string}

// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About Us',
};