var express = require('express');
var hbs = require('hbs');
require('./hbs/helpers/helpers.js')

const port = process.env.PORT|| 3000;

var app = express();

app.use(express.static(__dirname+'/public/'));

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    ///res.send('Hello World');
    res.render('home.hbs',{
        nombre:'nicolas m. mosso'
    });
});
app.get('/about', (req, res) => {
    ///res.send('Hello World');
    res.render('about.hbs',{
        nombre:'Nicolas',
    });
});
app.get('/data', (req, res) => {
    ///res.send('Hello World');
    let salida = 'Hola Data';
    res.send(salida);
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ',port);
});