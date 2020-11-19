import React from 'react'
import {Card, Button} from "react-bootstrap"



const SingleBook = (props) => {
    
    return (
        <div >
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={props.cover}/>
              <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default SingleBook