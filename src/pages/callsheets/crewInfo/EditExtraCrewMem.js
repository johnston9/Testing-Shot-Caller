/* Form component to edit Extra Crew members */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../../api/axiosDefaults";

const EditExtraCrewMem = (props) => {
    const [errors, setErrors] = useState({});

    const { setShowEdit, setCrewNew,
      id1,
      name1,
      position1,
      email1,
      phone1, } = props

    const [postData, setPostData] = useState({
            name: name1,
            position: position1,
            email: email1,
            phone: phone1,
    });

    const { 
      name,
      position,
      email,
      phone,
    } = postData;

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
  
        formData.append("name", name);
        formData.append("position", position);
        formData.append("email", email);
        formData.append("phone", phone);
    
      try {
        const { data } = await axiosReq.put(`/extracrewinfo/${id1}/`, formData);
        const { id, name, position, email, phone, departments,
           } = data;
        setCrewNew({
            id1: id,
            name1: name,
            position1: position,
            email1: email,
            phone1: phone,
            departments1: departments,            
        });
        setShowEdit((showEdit) => !showEdit)
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }
    const buttons = (
      <div className="mb-2 text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
          onClick={() => setShowEdit(showEdit => !showEdit)}
        >
          Cancel
        </Button>
        <Button className={`px-4 ${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} type="submit">
          Update
        </Button>
      </div>
    );
    
  return (
    <div >
      <Row>
        <Col xs={12} className="px-3" >
        <p className={`text-center my-2 py-0 mx-5  ${styles.SubTitle }`}
        style={{ textTransform: 'uppercase'}} >EDIT {position1} </p> 
      <Form className="text-center" onSubmit={handleSubmit}>
      {/* position  */}
      <Row className="mx-0 my-3">
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3} >
              <Form.Group controlId="position" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Position</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="position"
                  value={position}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.position?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3} >
          <Form.Group controlId="name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3}>
          <Form.Group controlId="email" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className=" d-flex justify-content-center mx-0 px-1" xs={12} sm={6} md={3}>
          <Form.Group controlId="phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        {/* buttons */}
        <Row>
          <Col className="text-center">
          <div className= {`mt-3 `} >{buttons}</div>
          </Col>
        </Row>
        </Form>
        </Col>
      </Row>
    </div>
  )
}

export default EditExtraCrewMem