import React from "react";
import doctor1 from "assets/img/1.jpg";
import doctor2 from "assets/img/6.jpg";
import doctor3 from "assets/img/8.jpg";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Doctor() {
  return (
    <div className="content">
      <Row className="justify-content-end">
        <Col xs="12">
        <Link to="/admin/Adddoctor">
        <Button className="btn-fill" color="primary" type="submit">
          New Doctor
        </Button></Link>
        </Col>
        <UncontrolledDropdown className="ml-auto">
          <DropdownToggle
            caret
            className="btn-icon"
            color="link"
            data-toggle="dropdown"
            type="button"
          >
            <i className="tim-icons icon-components" />
          </DropdownToggle>
          <DropdownMenu aria-labelledby="dropdownMenuLink" right>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              A To Z List
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              Z To A List
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Row>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">
                    <img alt="image" width={90} src={doctor1} />
                    <br></br>
                    Dr. Samantha Queque
                  </CardTitle>
                  <h3>Gynecologist</h3>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">
                    <img alt="image" width={90} src={doctor2} />
                    <br></br>
                    Dr. Martha Lazis
                  </CardTitle>
                  <h3>Dentist</h3>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h3">
                    <img alt="image" width={90} src={doctor3} />
                    <br></br>
                    Dr. Mark Andrew
                  </CardTitle>
                  <h3>Surgeon</h3>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
