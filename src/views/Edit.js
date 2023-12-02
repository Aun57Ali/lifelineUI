import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function Edit() {
  return (
    <div className="content">
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
                      <Input placeholder="dmorse@email.com" type="email" />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Change Address</label>
                      <Input defaultValue="" placeholder="" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Change Username</label>
                      <Input
                        defaultValue="DavidMorse"
                        placeholder=""
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Change Password</label>
                      <Input defaultValue="" placeholder="" type="text" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Change Contact No.</label>
                      <Input
                        defaultValue=""
                        placeholder="Contact"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="6">
                    <FormGroup>
                      <label>Change Photo</label>
                      <Input type="file" name="Photo" id="Photo" />
                      <br></br>
                      <i className="fa fa-camera" />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </Col>
          
        </Row>
      </div>
  )
}
