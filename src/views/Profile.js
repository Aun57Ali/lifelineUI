import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import back from "./../assets/img/12.jpg";

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
        <Col lg="6" md="12">
          <Card className="card-tasks">
            <CardHeader>
              <h4 className="title d-inline">About Me</h4>
            </CardHeader>
            <CardBody>
              <div className="table-full-width table-responsive">
                <h5 style={{ color: "#ff8d72" }}>Description: </h5>
                <p>
                  As a hospital administrator, my role is instrumental in
                  ensuring the efficient functioning of our healthcare facility.
                  I oversee various departments, manage budgets, and collaborate
                  closely with medical staff to maintain exceptional standards
                  of patient care. My responsibilities encompass tasks such as
                  staffing, scheduling, and implementing policies to ensure
                  adherence to healthcare regulations. I prioritize optimizing
                  resources and enhancing patient experiences, striving to
                  create a safe, well-organized, and patient-centric environment
                  within our hospital. Through leadership and strategic
                  decision-making, I aim to contribute to the overall success
                  and effectiveness of our institution, placing utmost
                  importance on delivering high-quality healthcare services.
                </p>
                <br></br>
                <h5 style={{ color: "#ff8d72" }}>Language: </h5>
                <p>English</p>
                <br></br>
                <h4 style={{ color: "#00f2c3" }}>Personal Information: </h4>
                <br></br>
                <p style={{ color: "#ff8d72" }}>Name: </p>
                <p>David Morse</p>
                <br></br>
                <p style={{ color: "#ff8d72" }}>Email: </p>
                <p>dmorse@gmail.com</p>
                <br></br>
                <p style={{ color: "#ff8d72" }}>Age: </p>
                <p>29</p>
                <br></br>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
