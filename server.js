
// let http = require('http');

// let servidor = http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type':'text/html'});
//     res.write('<h3> SERVIDOR BASICO</h3>');
//     console.log('petición web');
//     res.end();
// });

 const express = require('express');
 const morgan = require('morgan');

 const app = express();

 CONFIGURACION DEL LOGGER
 app.use(morgan('combined'));

Endpoints
app.use(morgan(get('/home', function(req, res){
    res.send('Bienvenido al mejor sitio de películas en la región')
})))

app.get('/', function(req, resp){
    
})

app.get('/api/movie', function(req, resp){
    resp.send('EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/cines', function(req, resp){
    resp.send('EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/movie/expoferia', function(req, resp){
    resp.send('GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA <br><img src = "https://www.publimetro.com.mx/resizer/4s_bbC4z0vtqm-GPVFqKHqKohX4=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/B44KJZ7KENGXTJ7GDFVNI25T74.jpg"width="500">');
})


//INICIALIZACION DEL SERVIDOR
const port = 3000
app.listen(port, () =>{
    console.log("SERVIDOR EN EJECUCION EN: " + `http://localhost:${port}`)
})