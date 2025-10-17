
// import express
const express = require('express');

// utilizzo di express
const app = express();

// middleware per jleggere il body in formato json
app.use(express.json());
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

// avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});