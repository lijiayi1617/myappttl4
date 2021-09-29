import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddCustomer = () => {
  let history = useHistory();
  const [user, setCustomer] = useState({
    name: "",
    phone: "",
    timestamp: "",
  });

  const { name, phone, timestamp } = user;
  const onInputChange = e => {
    setCustomer({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Customer</h2>
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
          <button className="btn btn-primary btn-block">Add Customer</button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;