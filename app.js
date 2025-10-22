
// import express
const express = require('express');

// utilizzo di express
const app = express();


// per leggere il body in formato json
app.use(express.json());

// import middleware per ERRORE 404
const notFound = require('./middleware/notFound404');
// import middleware per ERRORE 500
const errorHandler = require('./middleware/errorHandler');

// utilizzo di express router
const postsRouter = require('./routing/posts');

// tutti i file dentro la cartella public saranno accessibili dal browser
app.use(express.static('public'));

// numero della porta che andrà nell'indirzzo http
const port = 3000;

app.get('/', (req, res) => {
  res.send('Homepage del server');
});

// middleware per leggere il body in formto jsn
app.use(express.json());

// tutte le rotte corripondono a posts
app.use('/posts', postsRouter)


// middlw per errore 404 di rotta non inesistente
app.use(notFound);

//middlw per per gestione errori interni
app.use(errorHandler)

// avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});