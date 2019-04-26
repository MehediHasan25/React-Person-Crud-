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
                <div>
                    <h1> Person Information</h1>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Name</th>
                                <th scope="col">Organization</th>
                                <th scope="col">Designation</th>
                                <th scope="col"></th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody >
                            {persons.map(person => (

                                <tr key={person._id}>
                                    {/* <th scope="row" >{person._id}</th>  */}

                                    <td>{person.name}</td>
                                    <td>{person.organization}</td>
                                    <td>{person.designation}</td>
                                    <td>
                                        <i
                                            // onClick={this.onDelete.bind(this, person.id)}
                                            onClick={() => this.onDelete(person._id)}
                                            className="fas fa-times"
                                            style={{ cursor: 'pointer', color: 'red' }}>
                                        </i>
                                    </td>
                                    <td>
                                        <Link to={`/update/${person._id}`}>
                                            <i
                                                className="fas fa-pencil-alt"
                                                style={{
                                                    cursor: 'pointer',
                                                    float: 'right',
                                                    color: 'black',
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