import React from 'react'
import { useRedirect } from '../../../hooks/Redirect';
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SchedBackground = ({quantity, role, costume}) => {
    useRedirect("loggedOut");

    return ( 
        <div className='mx-4 px-2'>
        <Row >
        <Col className={`${styles.TitleBox3} text-center px-0 mx-0`} xs={2} >
        <p >{quantity} </p>
        </Col>
        <Col xs={5} className={`${styles.TitleBox3} text-center px-0 mx-0`}>
        <p >{role} </p>
        </Col>
        <Col xs={5} className={`${styles.TitleBox3} text-center px-0 mx-0`}>
        <p >{costume} </p>
        </Col>
        </Row>
        <hr className='py-0 my-0'/>
        </div>
    )
}

export default SchedBackground