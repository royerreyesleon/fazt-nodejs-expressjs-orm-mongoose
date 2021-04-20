const { json } = require('express');
const express = require('express')
const path = require('path');

// INICIALIZANDO
const app = express();


// CONFIGURACIONES

// require('dotenv').config()
// const port = process.env.PORT || 3007
app.set('port', process.env.PORT || 3007);
app.set('views', path.join(__dirname, 'views')); // VISTAS
app.set('view engine', 'ejs'); // ESTABLECER EL MOTOR DE PLANTILLA


// MIDDLEWARES (FUNCIONES ANTES QUELLEGUEN A LAS RUTAS)
app.use(express.json()); // MANIPULAR DATOS JSON
app.use(express.urlencoded({extended: false})) // MANIPULAR LOS DATOS QUE VENGAN DE FORMULARIOS
// VARIABLES GLOBALES


// RUTAS
app.get('/' , (req , res)=>{
   // res.send('hello from simple server :)')
   res.render('index.ejs');
})

app.use(require('./routes/notes.routes'))

// ARCHIVOS ESTATICOS (PUBLICOS)
// STATIC (ARCHIVOS ESTATICOS) 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'views')));


module.exports = app;