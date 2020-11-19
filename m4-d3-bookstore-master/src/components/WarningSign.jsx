import React from 'react'
import {Alert} from "react-bootstrap"

const WarningSign = (props) => {
    console.log(props)
    return (
        <div>
           <Alert  variant={'danger'}>
             {props.text}
           </Alert> 
        </div>
    )
}

export default WarningSign