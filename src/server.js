const { json } = require('express');
const express = require('express')

// INICIALIZANDO
const app = express();


// CONFIGURACIONES

// require('dotenv').config()
// const port = process.env.PORT || 3007
app.set('port', process.env.PORT || 3007)

// MIDDLEWARES (FUNCIONES ANTES QUELLEGUEN A LAS RUTAS)
app.use(express.json()); // MANIPULAR DATOS JSON
app.use(express.urlencoded({extended: false})) // MANIPULAR LOS DATOS QUE VENGAN DE FORMULARIOS
// VARIABLES GLOBALES


// RUTAS
// app.get('/' , (req , res)=>{
//    res.send('hello from simple server :)')
// })
app.use(require('./routes/notes.routes'))

// ARCHIVOS ESTATICOS (PUBLICOS)



module.exports = app;