import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function AddDoctor() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Doctor</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Mike"
                        placeholder="Company"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Last Name</label>
                      <Input
                        defaultValue="Andrew"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Designation</label>
                      <Input
                        defaultValue="Surgeon"
                        placeholder="Designation"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input placeholder="mike@email.com" type="email" />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Address</label>
                      <Input
                        defaultValue=""
                        placeholder="Home Address"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>Gender</label>
                      <select class="form-control" id="genderSelect">
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="4">
                    <FormGroup>
                      <label>Contact No.</label>
                      <Input
                        defaultValue=""
                        placeholder="Contact"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="4">
                    <FormGroup>
                      <label>Date Of Birth</label>
                      <Input defaultValue="" placeholder="DOB" type="date" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>Add Photo</label>
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
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
