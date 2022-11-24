//import logo from './logo.svg';
//import { Button, Container, Form } from "react-bootstrap";
import React from 'react'; // Importación de react
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // Solo trae 4 componentes

// Los siguiente componentes son necesarios para utilizar en react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de bootstrap
import "./App.css";


import CreateEmployee from "./components/create-employee.component";
import EditEmployee from "./components/edit-employee.component";
import EmployeeList from "./components/employee-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-employee'} className="nav.link">
                  App React MERN Stack
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-employee"} className="nav-link">
                    Crear Empleado
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/employee-list"} className="nav-link">
                    Lista Empleados
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/create-employee"
                    component={(props) => <CreateEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/update-employee/:id"
                    component={(props) => <EditEmployee {...props} />}
                  />
                  <Route
                    exact
                    path="/employee-list"
                    component={(props) => <EmployeeList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </Router>
    </div>    
  );
}

export default App;
