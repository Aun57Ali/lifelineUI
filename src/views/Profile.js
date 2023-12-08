import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import back from "./../assets/img/12.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditableInput = ({ defaultValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Perform actions to save the updated value (e.g., API calls, state updates, etc.)
    console.log("Updated value:", inputValue);
  };

  return (
    <>
      {isEditing ? (
        <Input value={inputValue} onChange={handleInputChange} />
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input value={inputValue} disabled />
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="ml-2"
            onClick={handleEditClick}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
      {isEditing && (
        <Button className="mt-2" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      )}
    </>
  );
};

export default function Profile() {
  return (
    <div className="content">
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h2">Profile</CardTitle>
                </Col>
                <Col xs="12">
                  <img src={back} width={1400} />
                  <h2>David Morse</h2>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Card className="card-user">
            <CardBody>
              <CardText />
              <div className="author">
                <div className="block block-one" />
                <div className="block block-two" />
                <div className="block block-three" />
                <div className="block block-four" />
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar"
                    src={require("assets/img/emilyz.jpg")}
                  />
                  <FormGroup className="text-center">
                    <label>Change Photo</label>
                    <Input type="file" name="Photo" id="Photo" />
                    <br></br>
                    <div
                      style={{
                        border: "2px solid #00bf9a",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "50px",
                        height: "30px",
                        margin: "auto",
                      }}
                    >
                      <i className="fa fa-camera" />
                    </div>
                  </FormGroup>
                  <br></br>
                  <h5 className="title">David Morse</h5>
                </a>
                <p className="description">Admin</p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="8">
          <Card>
            <CardHeader>
              <h5 className="title">Edit Profile</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Change Email</label>
                      <EditableInput defaultValue="dmorse@email.com" />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Change Address</label>
                      <EditableInput defaultValue="Karachi" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Change Username</label>
                      <EditableInput defaultValue="DavidMorse" />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Change Password</label>
                      <EditableInput defaultValue="abc123" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Change Contact No.</label>
                      <EditableInput defaultValue="0312-3456789" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <br></br>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
