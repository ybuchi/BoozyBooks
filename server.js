var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');


// DataBase
var db = require('./BoozyBooks/config/database');
// Test DB
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

var app = express();

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body Parse
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// api routes
require('./routes/api-routes')(app);
// html routes
require('./routes/html-routes')(app);






var PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
