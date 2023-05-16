const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port =3030;

app.use ( express.static('public'));
app.set("views",path.join(__dirname+ "/public/views"));
app.set("view engine","hbs");

app.get('/', (req, res) => {
    res.render('disponibilidad');
  });

app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
})