import React, { Component } from 'react';
import TextInputGroup from './layout/TextInputGroup';
import axios from 'axios';

class Edit extends Component {
    state = {
        name: '',
        organization: '',
        designation: '',
        errors: {}
    };

    async componentDidMount(){
        const id = this.props.match.params.id;
        const res = await axios.get(`http://localhost:5000/get-id/${id}`);
        const pres = res.data;
       

        this.setState({
            name: pres.name,
            organization:pres.organization,
            designation:pres.designation
        });

    }



    onSubmit = e => {

        e.preventDefault();



        const {name, organization, designation } = this.state;
       
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

       const id= this.props.match.params.id;
       console.log(id);

        axios.post(`http://localhost:5000/update/${id}`, obj)
        .then(res=> console.log(res.data));

        this.setState({
            name: '',
            organization: '',
            designation: '',
            errors: {}
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
                
                <h1 style={{textAlign:"center", color:"#989799"}} >Update Person</h1>
                </div>

                <br></br>
                <div Align="center">
                    <form onSubmit = {this.onSubmit}>
                        
                    <div className='col-md-5' >
                        <TextInputGroup
                            label="Name"
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


                        <div className="col-md-5" Align="right">
                        <input
                            type="submit"
                            value="Update"
                            className="btn btn-info btn-sm"
                        />
                        </div>

                        

                    </form>

                </div>
                </div>


        );
    }
}

 
export default Edit;