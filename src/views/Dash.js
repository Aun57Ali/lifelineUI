import React from "react";

import { Alert, Row, Col } from "reactstrap";

export default function Dash() {
  return (
    <div className="content">
      <Row>
        <Col md="6">
          <Alert color="primary" style={{textAlign: 'center'}}>
            <span>
              <h2>Appointment</h2>
              <h4>76</h4>
            </span>
          </Alert>
          <Alert color="success" style={{textAlign: 'center'}}>
            <span>
              <h2>Total Patient</h2>
              <h4>1214</h4>
            </span>
          </Alert>
        </Col>
      </Row>
    </div>
  );
}
