
const posts = require('../data/postsData');

// INDEX
const indexPost = (req, res) => {
  res.json(posts);
}

// SHOW mostra un singolo post
const showPost = (req, res) => {
  
  const id = parseInt(req.params.id);

  const postTrovato = posts.find(post => post.id === id);
  
  if(postTrovato){
    res.json(postTrovato);
  } else {
    res.status(404).send('Errore, post non trovato')
  }
}

// STORE - Creazione di un nuovo post
const storePost = (req, res) => {
  res.send('Creazione delle ricette');
};

// UPDATE - Modifica integrale
const updatePost = (req, res) => {
  res.send('Modifica integrale della ricetta' + req.params.id);
};

// MODIFY - Modifica parziale
const modifyPost = (req, res) => {
  res.send('Modifica parziale della ricetta' + req.params.id);
};

// DELETE - Eliminazione
const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  res.send('Eliminazione della ricetta' + req.params.id);

  const ricetta = posts.find(post => post.id === id);

  if(!ricetta){
     return res.status(404).send('Post non trovato');
  }
  // lo rimuovo dall'array
  posts.splice(ricetta, 1);
  console.log('Lista aggiornata:', posts);

  res.sendStatus(204);

};

// export di tutte le funciozioni di CRUD
module.exports = {indexPost, showPost, storePost, updatePost, modifyPost, deletePost};