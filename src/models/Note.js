const {Schema, model} = require('mongoose');

// DEFINE EL ESQUEMA
const NoteSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    // createAt:
    // updateAt
}, {
    timestamps: true
});


// MODELO
// module.exports = NoteSchema;
module.exports = model('Note', NoteSchema);
// module.exports = model('Note', NoteSchema, 'notas');