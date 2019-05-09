import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    state = {
        name: "",
        organization: "",
        designation: "",
        query: " ",
        errors: {}

    };

    handleChange = e => this.setState({ query: e.target.value });


    handleSubmit = async (e) => {
        e.preventDefault();

        const { name, organization, designation, query } = this.state;

        if (query === '') {
            this.setState({ errors: { query: 'Name is Required' } });
            return;
        }
        console.log(query);

        const obj = {
            name,
            organization,
            designation
        }
        axios.post(`http://localhost:5000/search/${query}`, obj)
            .then(res => console.log(res.data));
    }




    render() {
        const { query, errors } = this.state;
        return (
            <div className="container">

                <h1 style={{ textAlign: "center", color: "#989799" }} >Search Person </h1>

                <br></br>

                <div>
                    <form onSubmit={this.handleSubmit}>

                        <div className="col-md-5">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    id="name"
                                    value={query}
                                    placeholder="Search Name"
                                    errors={errors.query}
                                >
                                </input>
                            </div>
                        </div>

                        <br></br>

                        <div className="col-md-5" >
                            {/* <input type="button" className="btn btn-info btn-sm">Search</> */}
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-info btn-sm"
                            />
                        </div>

                    </form>
                </div>

            </div>


        );
    }
}

export default Search;