require('dotenv').config()
const app = require('./server');
require('./database');


// INICIANDO EL SERVIDOR
// app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
app.listen(app.get('port') , ()=> console.log('> Server is up and running on port : ' + app.get('port')))