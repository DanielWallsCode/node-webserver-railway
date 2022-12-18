//ESTABLECER VARIBLES DEL DOTENV
require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express();
//PARA USAR UNA VARIABLE DE DOTENV
const port = process.env.PORT;

//RENDERIZAR CON HANDLERBARS
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/components');

// MIDLEWARES - SERVIR CONTENIDO ESTATICO
app.use(express.static('public'));

app.get('/', (req,res) => {
    //SEGUNDA OPCIONES SON LOS ARGUMENTOS
    res.render('home',{
        nombre: ' Daniel Paredes',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generc', {
        nombre: 'daniel',
        titulo: 'curso de node'
    });
});

app.get('/elements', (req,res) => {
    res.render('elements',{
        nombre: 'daniel',
        titulo: 'curso de node'
    });
});

// __dirname para construir el path
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchanndo purto ${port}`)
});