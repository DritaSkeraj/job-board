import React from 'react';
import { Navbar } from "react-bootstrap";
import octocat from "./Octocat (1).png";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => state;

const mapDispachToProps = (dispatch) => ({
  setFavorite: (jobId) => dispatch({ type: "ADD_FAVORITE", payload: jobId }),
});

class MyHeader extends React.Component {
  state = {
    jobId: null,
  };

  render() {
    return (
      <>
        <Navbar bg="light" style={{'position': 'fixed', 'top': '0', 'width': '100%', 'z-index': '10'}}>
          <Link to='/'>
          <Navbar.Brand href="#home">
            <img src={octocat} style={{ width: "60px", height: "60px" }} />
            Github Jobs
          </Navbar.Brand>
          </Link>
          <Navbar.Collapse className="justify-content-end mr-3">
            <Navbar.Text>
              <Link to={`/favorites`}>
              {this.props.favorites.length} Favorites
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(MyHeader);
