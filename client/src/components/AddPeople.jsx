import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';

function AddPeople() {
  const [people, setPeople] = useState({
    name: '',
    num: ''
  });

  const addFun = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:9000/peopleRouter/addPeople",
        people
      );
      alert(data);
      setPeople({ name: '', num: '' });
    } catch (err) {
      alert("User not added");
      console.log(err);
    }
  };

  return (
    <Container className="w-25 shadow p-3 rounded mt-5">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFullName" className="mt-2 mb-2">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={people.name} 
                onChange={addFun}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group controlId="number" className="mt-3 mb-2">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                name="num"
                value={people.num} 
                onChange={addFun}
                placeholder="Enter number"
              />
            </Form.Group>
            <div align="center" className="mt-3">
              <Button type="submit">Add</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPeople;
