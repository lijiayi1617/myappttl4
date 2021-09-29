import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setCustomer] = useState([]);

  useEffect(() => {
    displayCustomers();
  }, []);

  const displayCustomers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setCustomer(result.data.reverse());
  };

  const deleteCustomer = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    displayCustomers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Waitlist System</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.timestamp}</td>


                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    Display
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Update 
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteCustomer(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;