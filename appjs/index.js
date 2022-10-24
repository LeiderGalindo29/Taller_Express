
/*
const http = require("http")
const port = 8000;
const host = 'localhost';



const requestLister = function(req, res) {
    res.writeHead(200)
    Response.apply("Esto es un servidor")
};

const server = http.createServer(requestLister);
server.listen(port, host, () => {
    console.log(`El servidor funciona sobre http://${host}:${port}`);
})

*/

/*
const http = require("http")


function handlServer(req, res) {
    res.write('<h1>Respuesta del Usuario</h1>');
    res.end();
}

const server = http.createServer(handlServer).listen(3003)*/

/*const op=require('./ejercicio1.js')
console.log(op)

op.suma(9,5)
op.resta(9,5)
op.multiplicacion(9,5)
op.division(9,5)*/
 

const express = require('express')
const app = express()
const port = 3005
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    res.render('index')
  })  

app.get('/educacion', (req, res) => {
    res.render('educacion')
  })  

  
  app.get('/habilidades', (req, res) => {
    res.render('habilidades')
  })  

app.listen(port, () => {
  console.log(`Estas en el puerto : ${port}`)
})

app.use((req, res, next)=>
{
    res.status(404). sendFile(__dirname + '/public/404.html')
}
)
