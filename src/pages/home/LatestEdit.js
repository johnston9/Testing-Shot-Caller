import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";

import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useParams } from "react-router-dom";

function LatestEdit() {
  useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        content: "",
        departments: "",
        image1: "",
      });
      const { title, content, departments, image1 } = postData;
      const imageInput1 = useRef(null);

      const history = useHistory();
      const { id } = useParams();

      useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/department/posts/${id}/`);
            const { title, content, departments, 
                image1, is_owner } = data;
    
            is_owner ? setPostData({ title, content, departments, 
                image1}) : history.push("/");
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [history, id]);
    
      const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

      const handleChangeImage1 = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(image1);
          setPostData({
            ...postData,
            image1: URL.createObjectURL(event.target.files[0]),
          });
          console.log(`image1 ${image1}`)
        }
      };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("departments", departments);
    if(imageInput1.current.files[0]) {
      formData.append("image1", imageInput1.current.files[0]);
    }
  
    try {
      await axiosReq.put( `/department/posts/${id}`, formData);
      history.push(`/latest/post/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const textFields = (
      <div>
          <Form.Group controlId="title" className="mb-2" >
                <Form.Label className="p-1" >Title</Form.Label>
                <Form.Control 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            <Form.Group controlId="content" className="mb-2" >
                <Form.Label className="p-1" >Content</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="content"
                    as="textarea"
                    rows={6}
                    value={content}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      </div>
  )
  const buttons = (
    <div className="text-center">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-4 ml-3`} type="submit">
        Edit
      </Button>
    </div>
  );

  return (
    <div>
        <TopBox work="Latest Buzz"
          title="Edit Post" />
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      onClick={() => history.goBack()}
      >
      Back
      </Button>
    <Form className="mt-3" onSubmit={handleSubmit}>
    <Row>
    <Col md={6} className="p-0 p-md-2">
        <Container className= {`${appStyles.Content} ${styles.Container}`} >
          {textFields}
          </Container>
      </Col>
      <Col className="pt-2 p-0 p-md-2" md={6}>
        <Container
          className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
        >
          <Form.Group className="text-center pt-3">
              {image1 ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image1} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.Control
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage1}
                ref={imageInput1}
              />
            </Form.Group>
            {errors?.image1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Container>
      </Col>   
    </Row>
    <Row>
      <Col>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
      </Col>
    </Row>
  </Form>
  </div>
  );
}


export default LatestEdit