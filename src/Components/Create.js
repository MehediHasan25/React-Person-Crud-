import React, { Component } from 'react';
import TextInputGroup from './layout/TextInputGroup';
import axios from 'axios';

class Create extends Component {
    state = {
        name: '',
        organization: '',
        designation: '',
        errors: {}
    };



    onSubmit = e => {

        e.preventDefault();



        const { name, organization, designation } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is Required' } });
            return;
        }

        if (organization === '') {
            this.setState({ errors: { organization: 'Organization is Required' } });
            return;
        }

        if (designation === '') {
            this.setState({ errors: { designation: 'Designation is Required' } });
            return;
        }

        // console.log(name);
        // console.log(organization);
        // console.log(designation);

        const obj={
            name,
            organization,
            designation

        };

        axios.post(`http://localhost:5000/add`, obj)
        .then(res=> console.log("Successful"));

        this.setState({
            name: '',
            organization: '',
            designation: ''
        });
        
        this.props.history.push('/');

    };

    onChangeName = e => this.setState({ name: e.target.value });
    onChangeOrganization = e => this.setState({ organization: e.target.value });
    onChangeDesignation = e => this.setState({ designation: e.target.value });



    render() {
        const { name, organization, designation, errors } = this.state;
        return (
            <div className="container">
            <div>
                <br></br>
                
                <h1 style={{textAlign:"center", color:"#989799"}} >Add Person</h1>
                </div>

                <br></br>
                <br></br>
                <div Align="center">
                    <form onSubmit={this.onSubmit}>
                     
                    <div className='col-md-5' >
                        <TextInputGroup
                            label="Name"
                            Align="left"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={this.onChangeName}
                            error={errors.name}
                        />
                        

                        <TextInputGroup
                            label="Organization"
                            name="organization"
                            type="text"
                            placeholder="Organization name"
                            value={organization}
                            onChange={this.onChangeOrganization}
                            error={errors.organization}
                        />

                        <TextInputGroup
                            label="Designation"
                            name="designation"
                            type="text"
                            placeholder="Enter your Designation"
                            value={designation}
                            onChange={this.onChangeDesignation}
                            error={errors.designation}
                        />
                        </div>
                        
                       
                        {/* <input
                            type="submit"
                            value="Add Person"
                            className="btn btn-primary"
                        /> */}
                       
                        <div className="col-md-5" Align="right">
                        <button type="submit" className="btn btn-info btn-sm">Add Person</button>
                        </div>
                    </form>

                </div>
                
                </div>


        );
    }
}

export default Create;