import React from 'react'
import {Badge} from "react-bootstrap"

const MyBarge = (props) => {
    return (
        <div>
            <Badge pill variant={props.color}>
              {props.text}
            </Badge>
        </div>
    )
}

export default MyBarge