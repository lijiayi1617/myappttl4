import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditCustomer = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setCustomer] = useState({
    name: "",
    phone: "",
    timestamp: "",
  });

  const { name, phone, timestamp } = user;
  const onInputChange = e => {
    setCustomer({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    displayCustomer();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const displayCustomer = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setCustomer(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Customer</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the TimeStamp"
              name="timestamp"
              value={timestamp}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Customer</button>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;