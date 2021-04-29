import React, { Component } from 'react';
import axios from 'axios'
import Job from './Job'

class JobsGroup extends Component {

    state = {
        jobs: [],
        location: this.props.location, 
        role: this.props.role
    }

    componentDidMount = () => {
        this.setState({location: '', role: ''})
        this.getJobs(this.state.role, this.state.location)
    }
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps != this.props){
            console.log("PREVPROPS::::::::", prevProps)
            console.log("PROPS NOW::::::::", this.props)
            this.getJobs(this.props.role, this.props.location)
        }
    }
    getJobs = (description, location) =>{
        let jobs = axios.get(`https://cors-anywhere-ds.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`)
        .then(res => this.setState({jobs: res}))
        .then(res => console.log("Fetch: ", res))
        return jobs;
    }

    render() {
        return (
            <div>
                {
                    this.state.jobs.data && this.state.jobs.data.map((job, index) => 
                        <Job 
                        id={job.id} 
                        img={job.company_logo} 
                        role={job.title} 
                        companyUrl={job.company_url} 
                        location={job.location}/>
                        )
                }
                
            </div>
        );
    }
}

export default JobsGroup;