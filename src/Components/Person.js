import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Person extends Component {
    _isMounted = false;
    state = {
        persons: []
    };

    componentDidMount() {
        this._isMounted = true;
        axios.get(`http://localhost:5000/`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        persons: response.data
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentWillUpdate() {
        this._isMounted = true;
        axios.get(`http://localhost:5000/`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        persons: response.data
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    onDelete = async (id) => {
        const { persons } = this.state;

        await axios.delete(`http://localhost:5000/delete/${id}`);

        var aperson = persons.concat([persons]);
        this.setState({ persons: aperson });

    }

    render() {
        const { persons } = this.state;
        return (

            <div className="container">
            <br></br>
               
                <div>
                    <h1 style={{textAlign:"center",color:"#989799"}}> Person Information</h1>
                    <br></br>
                    <table className="table table-grey">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col" style={{color:"#564975"}}>Name</th>
                                <th scope="col" style={{color:"#564975"}}>Organization</th>
                                <th scope="col" style={{color:"#564975"}}>Designation</th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody >
                            {persons.map(person => (

                                <tr key={person.id}>
                                    {/* <th scope="row" >{person._id}</th>  */}

                                    <td>{person.name}</td>
                                    <td>{person.organization}</td>
                                    <td>{person.designation}</td>
                                    <td>
                                        <i
                                            // onClick={this.onDelete.bind(this, person.id)}
                                            onClick={() => this.onDelete(person._id)}
                                            className="fas fa-times"
                                            style={{ cursor: 'pointer', color: '#c6053c' }}>
                                        </i>
                                    </td>
                                    <td>
                                        <Link to={`/update/${person._id}`}>
                                            <i
                                                className="fas fa-user-edit"
                                                style={{
                                                    cursor: 'pointer',
                                                    float: 'right',
                                                    color: '#20a9b2',
                                                    marginRight: '1rem'
                                                }}
                                            />
                                        </Link>
                                    </td>


                                </tr>

                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
        );
    }
}

export default Person;