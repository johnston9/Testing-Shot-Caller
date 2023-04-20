/* Form Page to create a Day by giving it a number and date */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";


const DayCreateForm = ({topbox, setShow} ) => {
    useRedirect();
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState("");

  const [postData, setPostData] = useState({
    day: ""});
  const { day } = postData;

  const history = useHistory();

  const handleDate = (date) => {
    const newdate = date.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric'
    })
    setStartDate(newdate);
    console.log(`start ${startDate}`)
  }

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("day", day);
    formData.append("date", startDate);
      
    try {
      await axiosReq.post("/days/", formData);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const buttons = (
    <div className="text-center">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div>
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Day" />
      ) }
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
      onClick={() => history.goBack()}
      >
      Back
    </Button>
    <Form className={`${styles.Back} mt-4`} onSubmit={handleSubmit}>
      <h4 className="text-center mt-3">Create Day</h4>
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
    <Row className="text-center">
    <Col xs={6} className="p-0 p-md-2 d-flex justify-content-center ">
        <Form.Group controlId="day" className={`${styles.Width} `} >
            <Form.Label className={`${styles.Bold}`} >Day</Form.Label>
            <Form.Control 
            type="text"
            name="day"
            value={day}
            className={`${styles.Input}`}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.day?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
      </Col> 
      <Col className="p-0 p-md-2 d-flex justify-content-center" xs={6}>
      <Form.Group controlId="date" className={`${styles.Width} `} >
                <Form.Label className={`${styles.Bold}`} >Date</Form.Label>
                <DatePicker 
                  className={`${styles.Input}`}
                   value={startDate}
                  onChange={(date) => handleDate(date) }
                  />
            </Form.Group>
            {errors?.date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      </Col> 
    </Row>
    {/* buttons */}
    <Row>
        <Col>
        <div className= {` my-3`} >{buttons} </div>
        </Col>
    </Row>
  </Form>
  </div>
  );
}

export default DayCreateForm
