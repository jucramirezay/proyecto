let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

// Rutas de las API se almacenan en la constante employeeRoute, utilizada para que express genere las API
const employeeRoute = require('../backend/routes/employee.route.js');

// Configuración de la base de datos. Carga el valor mongoURI del json creado en el archivo db.js, 
const db = require('../backend/database/db').mongoURI;

// Conexión de MongoDB
mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err)); // Si la conexión no es exitosa, se muestra el error

const app = express(); // Instancia de express
app.use(bodyParser.json());
app.use (
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use("/employee", employeeRoute); // URL base http://www.localhost:4000/employee

// Definición de puerto y levantamiento del servidor Backend
const port = process.env.PORT || 4000; // Puerto en el cual se va a ejecutar la app (puerto base o 4000)
const server = app.listen(port, () => { // Creación y levantamiento del servidor en el puerto indicado
    console.log("Connected to port " + port);
});

// Muestra error en consola, en caso de que este ocurra
app.use(function (err, req, res, next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});