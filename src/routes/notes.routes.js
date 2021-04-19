const {Router} = require('express');
const router = Router()

// TRAER EL CONTROLADOR
const {
    createNewNote,
    renderNotes,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');


// LISTAR
/*
http://localhost:3007/notes
*/
router.get('/notes' , renderNotes)


// CREAR
/*
http://localhost:3007/notes/add
Content-Type application/json
{
    "title":"Titulo 1",
    "description":"Descripcion 1"
}
*/
router.post('/notes/add' , createNewNote)


// EDITAR
/*
http://localhost:3007/notes/edit/1
Content-Type application/json
{
    "title":"Titulo 1",
    "description":"Descripcion 1"
}
*/
router.put('/notes/edit/:id' , updateNote)


// ELIMINAR
/*
http://localhost:3007/notes/delete/1
*/
router.delete('/notes/delete/:id' , deleteNote)

module.exports  = router