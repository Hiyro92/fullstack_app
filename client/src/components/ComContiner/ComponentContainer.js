import React from 'react'
import './ComponentContainer.css'

const ComponentContainer = (props) => {
    return (
        <div className = 'componentContainer'>
            {props.children}
        </div>
    )
}

export default ComponentContainer