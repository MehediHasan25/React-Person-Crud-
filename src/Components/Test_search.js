import React, { Component } from 'react';


import axios from 'axios';

class Search extends Component {
    state = {
        name: "",
        organization: "",
        designation: "",
        query: " ",
        pres:{}
        

    };

  


    handleChange = e => this.setState({ query: e.target.value });


    handleSubmit = async (e) => {
        e.preventDefault();
      //  console.log("In handle");

        const {query} = this.state;

      //  console.log(query);

        
        
    const qpres = await axios.post(`http://localhost:5000/search/${query}`);
    //console.log(qpres);
    this.setState({
      name: qpres.data.name,
      organization: qpres.data.organization,
      designation: qpres.data.designation
    });
   // console.log(this.state.pres);
     
    
}


componentDidUpdate(){
    console.log("Compnent did update");
    console.log(this.state.name);
}




    render() {
        const { query} = this.state;
        
      
        
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
                    <hr></hr>
                    <div>
                        {/* <ul>
                            <li>
                                {this.state.name === undefined ? "" : this.state.name}
                            </li>
                            <li>
                                {this.state.organization === undefined ? "" : this.state.organization}
                            </li>
                            <li>
                                {this.state.designation === undefined ? "" : this.state.designation}
                            </li>
                        </ul> */}
                        <ul>
                            <li>{this.state.name}</li>
                        </ul>
                    </div>  

                </div>
             
            </div>
            
           


        );
    }
}

export default Search;