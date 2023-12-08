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

export default function AddEmployee() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Employee</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Name</label>
                      <Input
                        defaultValue=""
                        name="HE_Name"
                        placeholder="Mike"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Designation</label>
                      <Input
                        defaultValue=""
                        name="HE_Role"
                        placeholder="Surgeon"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <Input
                        placeholder="mike@email.com"
                        name="HE_Email"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        defaultValue=""
                        name="HE_Password"
                        placeholder=""
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col className="pr-md-1" md="1">
                    <FormGroup>
                      <label>Add Photo</label>
                      <Input type="file" name="Photo" id="Photo" />
                      <br></br>
                      <div
                        style={{
                          border: "2px solid #00bf9a",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        <i className="fa fa-camera" />
                      </div>
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
