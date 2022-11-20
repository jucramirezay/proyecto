let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// Importar el esquema creado en el archivo Employee.js 
let employeeSchema = require('../models/Employee');

// ? A partir de este punto se van a definir las API creadas para el proyecto
// CREAR UN EMPLEADO NUEVO
router.route('/create-employee').post((req, res, next) => { // Definición de la URL 
    employeeSchema.create(req.body, (error, data) => { // Método crear de la clase Schema
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// LEER TODOS LOS EMPLEADOS QUE SE ENCUENTREN EN LA BASE DE DATOS
router.route('/read-all-employees').get((req, res, next) => { // Definición de la URL 
    employeeSchema.find((error, data) => { // Método find de la clase Schema
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// OBTENER UN EMPLEADO EN ESPECIFICO POR MEDIO DEL ID DEL MISMO
router.route('/obtain-employee/:id').get((req, res, next) => { // Definición de la URL 
    employeeSchema.findById(req.params.id, (error, data) => {   // Busqueda del empleado por ID
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

// ACTUALIZAR UN EMPLEADO POR MEDIO DEL ID
router.route('/update-employee/:id').put((req, res, next) => { // Definición de la URL 
    employeeSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => { // Busqueda y actualización del empleado por ID
        if(error) {
            console.log(error);
            return next(error);
        } else {
            res.json(data);
            console.log("Employee updated correctly! ");
        }
    });
});

// BORRAR UN EMPLEADO POR MEDIO DEL ID
router.route('/delete-employee/:id').delete((req, res, next) => { // Definición de la URL 
    employeeSchema.findByIdAndRemove(req.params.id, (error, data) => { // Busqueda y eliminación del empleado por ID
        if(error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            })
            console.log(data);
        }
    });
});

module.exports = router;