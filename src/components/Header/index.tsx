import React from 'react'

type props = {
    text:string
}

function Header (props:props){
    return(
        <header>
            <h1>{props.text}</h1>
        </header>
    )
}

export default Header;