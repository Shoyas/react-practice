import React from 'react';
import './Friend.css';
import { Row, Col, Button } from 'react-bootstrap';

const Friend = (props) => {
    const {name, email} = props.friend;
    //console.log(props.friend);
    return (
        <div className="friend-details">

        <Row>
            <Col>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="2">
            <Button variant="success">Success</Button>
            </Col>
        </Row>

            
        </div>
    );
};

export default Friend;