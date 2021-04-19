const mongoose = require('mongoose');

// const MONGODB_URI = 'mongodb://localhost/notes-app';
// const MONGODB_URI = process.env.MONGODB_URI;
const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conectado a BD mongo.'))
.catch(err => console.log(err));
