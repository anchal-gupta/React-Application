import React from 'react'

export default function Footer(props) {
  return (
    <div className={`p-2 fixed-bottom bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
    Made with <span>&#129505;</span> by Anchal Gupta
    </div>
  )
}
