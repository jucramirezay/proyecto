import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import EmployeeTableRow from "./EmployeeTableRow";

export default class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/employee/read-all-employees")
      .then((res) => { this.setState({ employees: res.data, }); console.log(res) })
      .catch((err) => { console.error(err); });
  }

  DataTable() {
    return this.state.employees.map((res, i) => {
      return <EmployeeTableRow obj={res} key={i} />;
    })
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Número de contacto</th>
              <th>Dirección</th>
              <th>Actividad</th>
              <th>Años de experiencia</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    )
  }
}
