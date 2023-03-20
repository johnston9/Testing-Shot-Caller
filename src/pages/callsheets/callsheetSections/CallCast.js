import React, { useState } from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import CallCastInfo from './CallCastInfo';
import { PostDropdown } from '../../../components/PostDropdown';
import { axiosReq } from '../../../api/axiosDefaults';
import EditCast from '../CallsheetEditCast';
import CallCastInfoMob from './CallCastInfoMob';

const CallCast = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const { 
        style,
        admin,
        handleMount,
        id,
        day_id,
        cast_number,
        role,
        artist,
        contact,
        swf,
        pickup,
        call,
        hmw,
        on_set,
        inst,
      } = props

    const [castNew, setCastNew] = useState({
        id1: id,
        day_id1: day_id,
        cast_number1: cast_number,
        role1: role,
        artist1: artist,
        contact1: contact,
        swf1: swf,
        pickup1: pickup,
        call1: call,
        hmw1: hmw,
        on_set1: on_set,
        inst1: inst,
    });

    const { 
        // eslint-disable-next-line
        id1,
        // eslint-disable-next-line
        day_id1,
        cast_number1,
        role1,
        artist1,
        swf1,
        pickup1,
        call1,
        hmw1,
        on_set1,
      } = castNew;

    const handleEdit = () => {
        setShowEdit(showEdit => !showEdit)
      };
    
    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/castcallsnew/${id}/`);
            handleMount();
        } catch (err) {
        }
    };

    return (
        <div style={style} className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='text-center mx-0 mb-0 pb-0' >
                <Col className={`mx-0 px-0 py-2 ${styles.Border}`} xs={1} md={1}>
                    <p className='mb-0'>{cast_number1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{role1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2  ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{artist1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 ${styles.Border }`} xs={1} md={1}>
                <p className='mb-0'>{swf1}</p>                        
                </Col>
                <Col className={`mx-0 px-0 py-2  ${styles.Border}`} xs={1} md={1}>
                    <p className='mb-0'>{pickup1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2  ${styles.UnitCallBorder}`} xs={1} md={1}>
                <p className='mb-0'>{call1}</p>                        
                </Col>
                <Col className={`mx-0 px-0 py-2 ${styles.Border} `} xs={1} md={1}>
                    <p className='mb-0'>{hmw1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 ${styles.Border} `} xs={1} md={1}>
                    <p className='mb-0'>{on_set1}</p>
                </Col>
                {admin ? (
                    <>
                    <Col className={`mx-0 px-0 py-2 ${styles.Border} `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                    </Col>
                    <Col className={`mx-0 px-0 py-2 ${styles.Border} `} xs={1} md={1}>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                    </>
                ) : (
                    <Col className={`mx-0 px-0 py-2 ${styles.Border} `} xs={2} md={2}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                    </Col>
                )}
            </Row>
            {/* info */}
                    {!showInfo ?("") : (                       
                    <CallCastInfo {...castNew}/> 
                    ) }
              <Row>
                <Col className={`mb-0 ${styles.NextCall}`}>
                </Col>
            </Row>
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditCast
                    setCastNew={setCastNew}
                    setShowEdit={setShowEdit}
                    {...castNew}/> 
                    ) }
                </Col>
            </Row>  
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
                    <p className='mb-0 py-2'>{cast_number1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={3}>
                    <p className='mb-0 py-2'>{role1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={3}>
                    <p className='mb-0 py-2'>{artist1}</p>
                </Col>  
                <Col className={`mx-0 px-0 ${styles.UnitCallBorder}`} xs={2}>
                    <p className='mb-0 py-2'>{call1}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={2} md={2}>
                <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`my-2 ${btnStyles.Button} ${btnStyles.Shed}`}>
                    I
                </Button>
                </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <CallCastInfoMob 
                    handleMount={handleMount}
                    setShowEdit={setShowEdit} 
                    admin={admin} {...castNew}/> 
                    ) }
                </Col>
            </Row>
            {/* edit */}
            <Row>
                <Col>
                    {!showEdit ?("") : (                       
                    <EditCast
                    setCastNew={setCastNew}
                    setShowEdit={setShowEdit}
                    {...castNew}/> 
                    ) }
                </Col>
            </Row>  
            <Row>
            <Col className={`mb-0 py-1 ${styles.NextCall}`}>
            </Col>
            </Row>     
        </div>
        </div>
    )
}
  
export default CallCast