import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class UpdateForm extends Component {
  render() {
    return (
      <Form onSubmit={(e) => this.props.updateData(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Name</Form.Label>
          <Form.Control type="text" onChange={(e) => this.props.setName(e)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New Image</Form.Label>
          <Form.Control type="text" onChange={(e) => this.props.setUrl(e)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default UpdateForm;
