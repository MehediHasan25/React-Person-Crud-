import React, { Component } from 'react';
//import axios from 'axios';

class Search extends Component {
    state = {
        name: " ",
        errors: {},
        showDetails: true
    };

    handleChange = e => this.setState({[e.target.name]:e.target.value});

        
  handleSubmit= e =>{
    e.preventDefault();
        console.log(this.state.name);
   }

   


    render() {
        const {name} = this.state;
        return (
            <div className="container">

                <h1 style={{ textAlign: "center", color: "#989799" }} >Search Person </h1>

                <br></br>


                <form onSubmit={this.handleSubmit}>

                                <div className="col-md-5">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        onChange={this.handleChange}
                                        id="name"
                                        value={name}
                                        placeholder="Search Name"
                                        >
                                    </input>
                                </div>
                                </div>

                            <br></br>

                                <div className="col-md-5" >
                                    <button type="button" className="btn btn-info btn-sm">Search</button>
                                </div>

                </form>

            </div>
             

        );
    }
}

export default Search;