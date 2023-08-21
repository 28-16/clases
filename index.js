const express = require("express");
const app = express();
app.get('/', (req, res)=> {
    res.send('Hola Mundo');
});
/*
app.get('/saludo', (req, res)=>{
    console.log('Buenos dias Tecnologos');
    res.send('Buenos dias Tecnologos');
});*/

/*app.get('/saludo/:nombre/:apellido/:edad/:ciudad/:domicilio', (req, res)=>{
    res.send(`Buenos dias ${req.params.nombre}`)
    res.send(`Apellido:  ${req.params.apellido}`)
    res.send(`Edad:  ${req.params.edad}`)
    res.send(`Ciudad:  ${req.params.ciudad}`)
    res.send(`Domicilio:  ${req.params.domicilio}`)
});*/

app.get('/saludo/:nombre/:apellido/:edad/:ciudad/:domicilio', (req, res) => {
    const mensaje = `Buenos días ${req.params.nombre}<br>` +
                   `Apellido: ${req.params.apellido}<br>` +
                   `Edad: ${req.params.edad}<br>` +
                   `Ciudad: ${req.params.ciudad}<br>` +
                   `Domicilio: ${req.params.domicilio}`;
    
    res.send(mensaje);
});

app.listen(5000, () =>{
    console.log("Servidor Ok en puerto 5000");
});
