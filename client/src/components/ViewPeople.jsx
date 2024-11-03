import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";

function ViewPeople() {
  const [view, setView] = useState([]);

  const viewPeople = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/peopleRouter/viewPeople");
      setView(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
const delPeople=async(id)=>{
  const {data} = await axios.delete(`http://localhost:9000/peopleRouter/delPeople/${id}`)
  console.log(data)
  alert(data)
}
  useEffect(() => {
    viewPeople();
  });

  return (
    <>
      <h2 className="text-center mt-5">People Details</h2>
      <div align="center">
        <Table striped bordered hover className="mt-3 w-50 text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {view.length > 0 ? (
              view.map((person, index) => (
                <tr key={person._id}>
                  <td>{index + 1}</td>
                  <td>{person.name}</td>
                  <td>{person.num}</td>
                  <td>
                    <Button variant="link" href={`/edit/${person._id}`}>
                      <MdEdit />
                    </Button>
                    <Button variant="link" onClick={()=>delPeople(person._id)}>
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No people found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ViewPeople;
