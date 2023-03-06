import React from "react";

function Table(props) {
  const { entries } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.desc}</td>
            <td>{entry.price}</td>
            <td>
              <button
                onClick={() => props.handleDelete(entry.id)}
                class="btn btn-outline-danger border-0"
              >
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
