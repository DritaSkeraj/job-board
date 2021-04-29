import React from 'react';
import { Row, Col } from "react-bootstrap";
import "../styles/Job.css";
import { withRouter, Link } from "react-router-dom";
import JobDetail from './JobDetail'
import {ImStarEmpty} from 'react-icons/im'
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setFavorite: (id) => 
    dispatch({
      type: "ADD_FAVORITE",
      payload: id,
    }),
  removeFavorite: (id) => 
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    })
})

class Job extends React.Component {

  handleClick = (id) => {
   const isFavorite = this.props.favorites.find(jobId => jobId == id);
    if(isFavorite){
      this.props.removeFavorite(id)
    } else {
      this.props.setFavorite(id)
    }
  }

  render(){
    // console.log('job state:', this.state)
    // console.log('job props', this.props)
  return (
    <div className="job-wrapper">
      
      <Row>
        <Col xs={3}>
          <img src={this.props.img} className="img" />
        </Col>
        <Col>
          <Row>
            <Link to={`/jobDetails/${this.props.id}`}>
            <h6>{this.props.role}</h6>
            </Link>
          </Row>
          <Row>
            <Col xs={10}>
              <p>Location: {this.props.location}</p>
            </Col>
            <Col xs={10}>
              <p>
                Company webpage:
                <a href={this.props.companyUrl}>{this.props.companyUrl}</a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <ImStarEmpty
          style={{'margin': '1em', 'color': 'rgb(50, 76, 83)', 'fontSize': '2em', 'textAlign': 'right'}}
          onClick={() => this.handleClick(this.props.id)}
          />
        </Col>
      </Row>
    </div>
  );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);
