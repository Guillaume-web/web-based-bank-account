import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";
import FormatNewEntry from "./FormatNewEntry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        { id: 1, name: "Loto ticket", desc: "", price: 20 },
        { id: 2, name: "Beers", desc: "Party night \\o/", price: -15 },
        { id: 3, name: "Phone Bill", desc: "January", price: -29.99 },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.setState((prevState) => ({
      entries: prevState.entries.filter((entry) => entry.id !== id),
    }));
  }

  handleNewEntry = (newEntry) => {
    this.setState((prevState) => ({
      entries: [...prevState.entries, newEntry],
    }));
    this.setState({
      name: "",
      description: "",
      price: "",
    });
  };

  render() {
    return (
      <div>
        <Table entries={this.state.entries} handleDelete={this.handleDelete} />
        <FormatNewEntry handleNewEntry={this.handleNewEntry} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
