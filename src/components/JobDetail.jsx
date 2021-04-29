import React, { Component } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import MyHeader from "./MyHeader";

class JobDetail extends Component {
  state = {
    job: [],
  };

  componentDidMount(id) {
    axios.get(`https://cors-anywhere-ds.herokuapp.com/https://jobs.github.com/positions/${this.props.match.params.id}.json`)
      .then((res) => {
        console.log("RESSSSSSSSSSSSS ", res)
        this.setState({ job: res.data})
      });
    // console.log('jjob detail params*********************', this.props.match.params.id)
  }

  render() {
    return (
      <div>
      <MyHeader/>
      {
        this.state.job && 
        <>
        <img src={this.state.job.company_logo} style={{'width':'200px', 'height':'200px', 'marginTop': '1em'}}/>
        <h2>{this.state.job.company}</h2>
        <h4>{this.state.job.location}</h4>
        <h6>{this.state.job.company_url}</h6>
        <p dangerouslySetInnerHTML={{__html: this.state.job.description}} style={{'textAlign': 'left', 'padding': '1em'}}></p>
        </>
      }
        <h3></h3>
      </div>
    );
  }
}

export default withRouter(JobDetail);
