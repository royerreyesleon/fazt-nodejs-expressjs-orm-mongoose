// CREAMOS UN OBJETO QUE VAMOS A EXPORTAR.
const notesCtrl = {};

// IMPORTAMOS EL MODELO DE DATOS QUE CREAMOS PARA PODER GUARDAR.
const Note = require('../models/Note');


notesCtrl.renderNotes = async (req, res) => {
    // res.send('Listar notas');
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNewNote = async (req, res) => {
    // console.log(req.body);
    const {title, description} = req.body;

    const newNote = new Note({title,description});
    // console.log(newNote);
    await newNote.save();

    res.json({status: 'Nota Creada'});

}


notesCtrl.updateNote = async (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);

    const {title, description} = req.body;

    await Note.findByIdAndUpdate(req.params.id, {
        title,
        description
    })

    // res.send('Actualizar nota');
    res.json({status: 'Nota Actualizada'});

}

notesCtrl.deleteNote = async (req, res) => {
    // res.send('Eliminar nota');
    // console.log(req.params.id);

    await Note.findByIdAndDelete(req.params.id);
    res.json({status: 'Nota Eliminada'});

}


module.exports = notesCtrl;