import React from "react";
import "../ComponentsCss/TableStyle.css";
import { useEffect, useState } from "react";
import TableData from "./TableData.jsx";
// import SearchHistory from "./SearchHistory.jsx";

const API = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <div className="table_section">
      <table>
        <thead>
          <tr>
            <th colspan="6" className="thHead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              cum?
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <TableData users={users} />
        </tbody>
      </table>
    </div>
  );
};

export default Home;
