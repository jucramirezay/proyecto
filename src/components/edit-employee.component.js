import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditEmployee extends Component {
  
  constructor(props) {

    super(props);

    this.onChangeEmployeeName            =  this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeePhoneNumber      =  this.onChangeEmployeePhoneNumber.bind(this);
    this.onChangeEmployeeAddress         =  this.onChangeEmployeeAddress.bind(this);
    this.onChangeEmployeeActivity        =  this.onChangeEmployeeActivity.bind(this);
    this.onChangeEmployeeExperienceYears =  this.onChangeEmployeeExperienceYears.bind(this);
    this.onSubmit                        =  this.onSubmit.bind(this);

    this.state = { // Inicialización de objeto que inicializa cada atributo con un valor vacio
      name            : "",
      phoneNumber     : "",
      address         : "",
      activity        : "",
      experienceYears : "",
    };

  }
  
  componentDidMount() {
    axios
      .get("http://localhost:4000/employee/obtain-employee/" + this.props.match.params.id )
      .then((res) => {
        this.setState({
          name:            res.data.name,
          phoneNumber:     res.data.phoneNumber,
          address:         res.data.address,
          activity:        res.data.activity,
          experienceYears: res.data.experienceYears,
        });
      })
      .catch((err) => { console.error(err); });
  }

  // Los siguientes son los métodos listener de cada uno de los atributos del Empleado
  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value }); // Al objeto creado en el constructor se le asigna el valor ingresado en el formulario
  }

  onChangeEmployeePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value }); // Al objeto creado en el constructor se le asigna el valor ingresado en el formulario
  }

  onChangeEmployeeAddress(e) {
    this.setState({ address: e.target.value }); // Al objeto creado en el constructor se le asigna el valor ingresado en el formulario
  }

  onChangeEmployeeActivity(e) {
    this.setState({ activity: e.target.value }); // Al objeto creado en el constructor se le asigna el valor ingresado en el formulario
  }

  onChangeEmployeeExperienceYears(e) {
    this.setState({ experienceYears: e.target.value }); // Al objeto creado en el constructor se le asigna el valor ingresado en el formulario
  }

  onSubmit(e) { 
    e.preventDefault();

    const employeeObject = {
      name            : this.state.name,
      phoneNumber     : this.state.phoneNumber,
      address         : this.state.address,
      activity        : this.state.activity,
      experienceYears : this.state.experienceYears 
    };

    axios
      .put("http://localhost:4000/employee/update-employee/" + this.props.match.params.id, employeeObject)
      .then((res) => { 
        console.log(res.data);
        console.log("Student successfully updated");  
      })
      .catch((err) => { console.log(err); });

    // Redigire a la página de la lista de empleados
    this.props.history.push('/employee-list');
  }

  
  render() {
    return (
      <div className='form-wrapper'>
        <Form onSubmit={this.onSubmit}>

          <Form.Group controlId='Name'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
              type='text'
              value={this.state.name}
              onChange={this.onChangeEmployeeName}
            />
          </Form.Group>

          <Form.Group controlId="PhoneNumber">
            <Form.Label>Número de contacto</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.phoneNumber}
              onChange={this.onChangeEmployeePhoneNumber}
            />
          </Form.Group>

          <Form.Group controlId="Address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.address}
              onChange={this.onChangeEmployeeAddress}
            />
          </Form.Group>
          
          <Form.Group controlId="Activity">
            <Form.Label>Actividad</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.activity}
              onChange={this.onChangeEmployeeActivity}            
            />
          </Form.Group>
          
          <Form.Group controlId="ExperienceYears">
            <Form.Label>Años de experiencia</Form.Label>
            <Form.Control 
              type="number"
              value={this.state.experienceYears}
              onChange={this.onChangeEmployeeExperienceYears}            
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Actualizar Empleado
          </Button>
        </Form>
      </div>
    )
  }
}
