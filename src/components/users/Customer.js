import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Customer = () => {
  const [user, setCustomer] = useState({
    name: "",
    phone: "",
    timestamp: "",
  });
  const { id } = useParams();
  useEffect(() => {
    displayCustomer();
  }, []);
  const displayCustomer = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setCustomer(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">Customer Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">timestamp: {user.timestamp}</li>
      </ul>
    </div>
  );
};

export default Customer;