import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        axios
            .delete("http://localhost:4000/employee/delete-employee/" + this.props.obj._id)
            .then((res) => { console.log("Employee successfully deleted"); })
            .catch((err) => { console.error(err); })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.phoneNumber}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.activity}</td>
                <td>{this.props.obj.experienceYears}</td>
                <td>
                    <Link
                        className='edit-link'
                        path='{product/:id}'
                        to={'/obtain-employee/' + this.props.obj._id}    
                    >
                        Editar
                    </Link>
                    <Button onClick={this.deleteEmployee} size="sm" variant="danger">
                        Borrar
                    </Button>
                </td>
            </tr>
        );
    }
}