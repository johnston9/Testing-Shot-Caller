// Page for admin to register new users
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import door from "../../assets/door.png";
import rightdoor from "../../assets/rightdoor.png";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import TopBox from "../../components/TopBox";
import axios from "axios";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import useRedirect from "../../hooks/Redirect";

const RegisterUsers = () => { 
  useRedirect();
  const crewInfoOne = useCrewInfoContext();
  const production_name = crewInfoOne.production_name || "";
  // eslint-disable-next-line
  const [showInfo, setShowInfo] = useState(false);

  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
    key: "",
  })

  const { username, password1, password2, key } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData)
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  }

  return (
    <Container className={styles.SignupBox} >
        {production_name ? (
            <TopBox work={production_name}
                        title={"Register Users" } />
          ) : (
            <TopBox work={`SHOT CALLER`}
                        title={"Register Users" } />
          ) }
        {/* info */}
        <Row className='mb-3'>
            <Col xs={12} className='text-center' >           
            <Button
              className={`px-5 py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
            </Col>
          </Row>
        <Row className={styles.Row}>
          <Col className="my-3 pr-0 pl-3 pl-md-4"
            xs={1} md={1}>
            <Image
                className={`${styles.FillerImagel}`}
                src={door}
            />
          </Col>
          <Col className="my-auto py-2 p-md-2" xs={10} >
          <Row >
            <Col md= {3} className="d-nome d-md-block"></Col>
            <Col xs={12} md={6} >
              <Container >
                <h1 className={styles.Header}>Register New Users</h1>
                <Form onSubmit={handleSubmit} className={styles.Form} >
                <Form.Group controlId="username" className="mb-2" >
                    <Form.Label className="d-none" >Username</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="text" placeholder="Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                       />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password1" className="mb-2">
                    <Form.Label className="d-none" >Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password" placeholder="Password1"
                      name="password1" 
                      value={password1}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password2" className="mb-2">
                    <Form.Label className="d-none" >Confirm Password</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="password2" placeholder="Confirm Password"
                      name="password2" 
                      value={password2}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="key" className="mb-2">
                    <Form.Label className="d-none" >Enter Key</Form.Label>
                    <Form.Control 
                      className={styles.Input}
                      type="key" placeholder="Enter Key"
                      name="key" 
                      value={key}
                      onChange={handleChange}
                      />
                </Form.Group>
                {errors.key?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

                <div className="text-center" >
                <Button
                  className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                  type="submit"
                >
                  Register
                </Button>
                </div>
                {errors.non_field_errors?.map((message, idx) => (
                  <Alert key={idx} variant="warning" className="mt-3">
                    {message}
                  </Alert>
                ))}
                </Form>
              </Container>
            </Col>
            </Row>
          </Col>
          <Col className={`my-3 pl-0 pr-3 pr-md-4`}
            xs={1} md={1} >
            <Image
              className={`${styles.FillerImagel}`}
              src={rightdoor}/>
          </Col>
        </Row>
    </Container>
  );
};

export default RegisterUsers;