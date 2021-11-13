import React, { useEffect, useState } from "react";
import { Alert, Button, Table } from "react-bootstrap";
import Admins from "../Admins/Admins";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [admins, setAdmins] = useState([]);
  const [success, setSuccess] = useState(false);
  const makeAdmin = (e) => {
    const user = { email };

    fetch("https://dry-gorge-11173.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
      fetch('https://dry-gorge-11173.herokuapp.com/users/admin')
      .then(res => res.json())
      .then(data => setAdmins(data));
  },[])
  return (
    <div>
      <h3 className="heading-color">Admin Panel</h3>
      <Table responsive striped bordered hover variant="dark" className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
              admins.map((admin,i)=> <Admins number={i+1} admin={admin}></Admins> )
          }
        </tbody>
      </Table>
      {success && <Alert severity="success">Admin Added Successfully!</Alert>}
      <div className="text-start makeAdmin">
        <h3>Make Admin : </h3>
        <input
          class="form-control"
          type="text"
          onBlur={handleOnBlur}
          placeholder="Email Address"
          aria-label="default input example"
        ></input>
        <Button onClick={makeAdmin} className="mt-3 customized-btn2">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default MakeAdmin;
