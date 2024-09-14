/* Component in the ScheduleScene to display the extra info */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ScheduleCreate.module.css";

const SchedSceneInfo = (props) => {
     const { title, dramatic_day, location_address, day_night,
            equip_set_props, new_info, style,
            department_info } = props
    return (
        <div className={`text-center py-2 mb-2 mx-2 px-2 ${styles.SceneBox}`}>
        <Row className='text-center mt-3'>
            <Col className={`${styles.BorderRight} mx-0 px-0 mb-0 pb-1`} xs={6} >
            <p className={`mb-2 mx-1 mx-sm-5 ${styles.Bold}`} style={style} >
                D/N - Heading - DD </p>
            <p >{day_night} - {title} - {dramatic_day} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={6}>
            <p className={`mb-2 mx-1 mx-sm-5 ${styles.Bold}`} style={style}>
                Equip Set Props</p>
            <p >{equip_set_props} </p>
            </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <hr className={`${styles.Break1} mb-0`}/>
        </Col>
        </Row>
        <Row className='text-center mt-3'>
            <Col className={`mx-0 px-0 mb-0 pb-1 ${styles.BorderRight}`} xs={6} >
            <p className={`mb-0 mx-1 mx-sm-5 ${styles.Bold}`} style={style}>
            Filming Address </p>
            <p >{location_address} </p>
            </Col>
            <Col className={`mx-0 px-0 mb-0 pb-1`} xs={6}>
            <p className={`mb-0 mx-1 mx-sm-5 ${styles.Bold}`} style={style}>
                New Info</p>
            <p >{new_info}</p>
            </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <hr className={`${styles.Break1} mb-0`}/>
        </Col>
        </Row>
        <Row className='text-center mt-3'>
            <Col className={`mx-0 px-0 mb-0 pb-1`}
             xs={12}>
            <p className={`mb-0 mx-1 mx-sm-5 ${styles.Bold}`} style={style}>
                Department Info </p>
            <p >{department_info} </p>
            </Col>
        </Row>
        <Row>
        <Col xs={12}>
        <hr className={`${styles.Break1} mb-0`}/>
        </Col>
        </Row>
        </div>
    )
}

export default SchedSceneInfo
