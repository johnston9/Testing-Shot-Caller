/* Page to display each the image full size   */ 
import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import styles from "../styles/Indexes.module.css";
import btnStyles from "../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

const Fullshot = ({image}) => {
    console.log(image);
    const history = useHistory();

    return (
        <div>
            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
                onClick={() => history.goBack()}
                >
                Back
            </Button>
            <Card className={`text-center mb-5 mx-md-3`}  >
                <Card.Header className={`pt-2 pb-1 ${styles.TopCard }`}>
                  </Card.Header>
                  <Card.Body >
                    <Row>
                    <Col className='text-center mt-2' xs={12}>
                    {image && <> 
                    <div className='px-1 mb-3'>
                        <Image className={styles.ImagesFull} 
                        src={image} alt="image" height="1000"  />
                        </div>
                        </>
                    }
                </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Fullshot