import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class MySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      location: "",
    };
    this.changeRole = this.changeRole.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  changeRole = (event) => {
    this.setState({ role: event.target.value });
  };
  changeLocation = (event) => {
    this.setState({ location: event.target.value });
  };
  search = (event) => {
    this.props.parentCallback(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Role"
            onChange={this.changeRole}
            id="role"
          />
          <FormControl
            placeholder="Location"
            onChange={this.changeLocation}
            id="location"
          />
          <InputGroup.Append>
            <Button
              variant="light"
              style={{ border: "1px solid #CED4DA" }}
              onClick={this.search}
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}
