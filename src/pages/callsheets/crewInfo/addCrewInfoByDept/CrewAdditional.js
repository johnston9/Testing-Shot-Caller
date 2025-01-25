/*Form component in the CrewInfoCreate and CrewInfoEdit Form
  components to add/edit the Post Department and Additional Crew
  Positions crew info */
  import React, { useState } from "react";
  import { useRedirect } from '../../../../hooks/Redirect';
  import Form from "react-bootstrap/Form";
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { Alert } from "react-bootstrap";
  import Button from 'react-bootstrap/Button';
  import styles from "../../../../styles/Callsheets.module.css";
  import btnStyles from "../../../../styles/Button.module.css";
  import AdditionalPositions2 from "./AdditionalPositions2";
  
  const CrewAdditional = ({handleChange, postData, setShow}) => {
    useRedirect();
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});
    const [showAddPos2, setShowAddPos2] = useState(false);
  
    const {add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
      add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
      add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
      add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
      add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
      add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
      add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
      add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
      add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
      add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
      add_pos_11_job, add_pos_11_name, add_pos_11_email, add_pos_11_phone,
      add_pos_12_job, add_pos_12_name, add_pos_12_email, add_pos_12_phone,
      add_pos_13_job, add_pos_13_name, add_pos_13_email, add_pos_13_phone,
      add_pos_14_job, add_pos_14_name, add_pos_14_email, add_pos_14_phone,
      add_pos_15_job, add_pos_15_name, add_pos_15_email, add_pos_15_phone,
      add_pos_16_job, add_pos_16_name, add_pos_16_email, add_pos_16_phone,
      add_pos_17_job, add_pos_17_name, add_pos_17_email, add_pos_17_phone,
      add_pos_18_job, add_pos_18_name, add_pos_18_email, add_pos_18_phone,
      add_pos_19_job, add_pos_19_name, add_pos_19_email, add_pos_19_phone,
      add_pos_20_job, add_pos_20_name, add_pos_20_email, add_pos_20_phone,
  } = postData || {};
  
    return (
      <div className="pb-3 text-center">
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >ADDITIONAL POSITIONS </h5>
      </div>
      <div className={`px-2 px-md-5 mx-md-5 pt-3 ${styles.White }`}>
      {/* Additional Position 1 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } style={{ textTransform: 'uppercase'}}>
      Additional Position 1</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew1</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_job"
              value={add_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_1_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_name"
              value={add_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_1_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_phone"
              value={add_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_1_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_email"
              value={add_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 2 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 2</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew2</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_job"
              value={add_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_2_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_name"
              value={add_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_2_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_phone"
              value={add_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_2_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_email"
              value={add_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 3 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 3</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew3</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_job"
              value={add_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_3_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_name"
              value={add_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_3_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_phone"
              value={add_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_3_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_email"
              value={add_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 4 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 4</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew4</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_job"
              value={add_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_4_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_name"
              value={add_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_4_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_phone"
              value={add_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_4_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_email"
              value={add_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 5 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 5</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew5</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_job"
              value={add_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_5_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_name"
              value={add_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_5_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_phone"
              value={add_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_5_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_email"
              value={add_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 6 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 6</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew6</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_6_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_job"
              value={add_pos_6_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_6_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_name"
              value={add_pos_6_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_6_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_phone"
              value={add_pos_6_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_6_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_email"
              value={add_pos_6_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 7 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 7</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew7</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_7_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_job"
              value={add_pos_7_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_7_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_name"
              value={add_pos_7_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_7_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_phone"
              value={add_pos_7_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_7_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_email"
              value={add_pos_7_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 8 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 8</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew8</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_8_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_job"
              value={add_pos_8_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_8_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_name"
              value={add_pos_8_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_8_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_phone"
              value={add_pos_8_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_8_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_email"
              value={add_pos_8_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 9 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 9</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrewp9</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_9_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_job"
              value={add_pos_9_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_9_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_name"
              value={add_pos_9_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_9_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_phone"
              value={add_pos_9_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_9_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_email"
              value={add_pos_9_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* Additional Position 10 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 10</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew10</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_job"
              value={add_pos_10_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_name"
              value={add_pos_10_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_phone"
              value={add_pos_10_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_email"
              value={add_pos_10_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>
      {/* ADDITIONAL CREW POSITIONS 11-20 BUTTON */}
      {/* <Row className="mt-5">
      <Col className="text-center" >
      <p>
      Click to add Additional Crew Positions 11 - 20  if needed
      </p>
      <Button
      className={`py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
      onClick={() => setShowAddPos2(showAddPos2 => !showAddPos2)} >Additional Positions 11 - 20
      </Button>
      </Col>
      </Row> */}
      {/* ADDITIONAL CREW POSITIONS 11-20 */}
      {/* {!showAddPos2 ? (
        ""
      ) : (
        <AdditionalPositions2 setShow={setShowAddPos2} 
        postData={postData} handleChange={handleChange}/> 
      ) } */}
      {/* Additional Position 10 */}
      <div>
      <p className={`my-3 py-0 mx-md-4 ${styles.SubTitle }` } 
      style={{ textTransform: 'uppercase'}}>Additional Position 10</p> 
      <div>
      <span className={`py-1 px-3 px-md-5 ${styles.BoldTitleCall }`} >
        USERNAME: addcrew10</span> 
      </div> 
      <Row className="mt-2">
          <Col xs={12} md={{span: 8, offset: 2}} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_job"
              value={add_pos_10_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row className="mt-1">
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_name" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_name"
              value={add_pos_10_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} md={4} className="d-flex justify-content-center p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_phone"
              value={add_pos_10_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center mt-1 mt-md-0 p-0 p-lg-2">
          <Form.Group controlId="add_pos_10_email" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_email"
              value={add_pos_10_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>
      {/* break */}
      <Row>
      <Col xs={12}>
      <hr className={`mt-3 mb-3`}/>
      </Col>
      </Row>

      </div>
      </div>
    )
  }
  
  export default CrewAdditional