import React from "react";

function Table(props) {
  return (
    <thead>
      <tr>
        <th scope="col">
          #
          <button className="btn" onClick={() => props.sortById()}>
            <i className="material-icons prefix">clear_all</i>
          </button>
        </th>
        <th scope="col">image</th>
        <th scope="col">
          name
          <button className="btn" onClick={() => props.sortByName()}>
            <i className="material-icons prefix">clear_all</i>
          </button>
        </th>
        <th scope="col">
          phone
          <button className="btn" onClick={() => props.sortByPhone()}>
            <i className="material-icons prefix">clear_all</i>
          </button>
        </th>
        <th scope="col">
          email
          <button className="btn" onClick={() => props.sortByEmail()}>
            <i className="material-icons prefix">clear_all</i>
          </button>
        </th>
      </tr>
    </thead>
  );
}

export default Table;
