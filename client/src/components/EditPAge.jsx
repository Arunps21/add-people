import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const [people, setPeople] = useState({});
  const { id } = useParams();
  const ref = useRef(null);
  const navigate = useNavigate()

  const addFun = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  };

  const editFun = async () => {
    try {
      console.log("Fetching data for ID:", id);
      const { data } = await axios.get(
        `http://localhost:9000/peopleRouter/editPeople/${id}`
      );
      console.log(data);
      ref.current["name"].value = data.name;
      ref.current["num"].value = data.num;
    } catch (err) {
      console.log("Error loading data", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:9000/peopleRouter/updatePeople/${id}`,
        people
      );
      console.log("hi",data)
      alert(data);
      navigate("/")
    } catch (err) {
      alert("User not updated");
      console.log(err);
    }
  };

  useEffect(() => {
    editFun();
  },[]);
  return (
    <Container className="w-25 shadow p-3 rounded mt-5">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} ref={ref}>
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
              <Button type="submit">Update</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditPage;
