import React, { useState } from "react";

function FormatNewEntry(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleNewEntry({
      id: Date.now(), //génére un identifiant basé sur l'horodatage actuel, chaque identifiant sera unique et pas de doublons.
      name: name,
      desc: description,
      price: Number(price),
    });
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <h2 className="text-center">Add new expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
        />

        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="3"
          cols="150"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="form-control"
        ></textarea>

        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className="form-control"
        />

        <br />
        <input
          className="btn btn-success float-right"
          type="submit"
          name="submit"
          value="Add expense"
        />
      </form>
    </div>
  );
}

export default FormatNewEntry;
