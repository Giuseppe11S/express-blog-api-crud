
const posts = require('../data/postsData');

// INDEX
const indexPost = (req, res) => {
  // debug per err 500
  // funzioneBella()
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

// STORE per creazione di un nuovo post
const storePost = (req, res) => {
  console.log(req.body); // log dei dati inseriti della richiesta in post 

  // genero un nuovo id incrementando l'id dell'ultimo post 
  const newId = posts[posts.length - 1].id + 1;
   
  // nuovo post con i dati inseriti in post
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  }
  
  posts.push(newPost);
  console.log('Lista creata', newPost);

  res.status(201).json({ 
    message: 'Nuovo post creato con successo!',
    post: newPost,
  });
  
};

// UPDATE moodifica integrale
const updatePost = (req, res) => {

  const id = parseInt(req.params.id);
  const postTrovato = posts.find(post => post.id === id);
  console.log('Post trovato:', postTrovato);

  if(!postTrovato){
    return res.status(404).send('Post non trovato');
  }

  const postUpdated = {
    id: postTrovato.id,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  }

  // aggiorno l'elemento dell'array mantenendo lo stesso id 
  posts[postTrovato] = postUpdated;

  res.json({
    message: 'Post aggiornato con successo!',
    post: postUpdated,
  });
  
  
};

// MODIFY - Modifica parziale
const modifyPost = (req, res) => {

  const id = parseInt(req.params.id);

  const post = posts.find(post => post.id === id);

  if(!post) {
   res.status(404);
    return res.json({
      error: 'Not found',
      message: 'Post non trovato'
    })
  }

  // aggiorno i campi presenti nel body dei post
  req.body.title ? post.title = req.body.title : post.title = post.title;
  req.body.content ? post.content = req.body.content : post.content = post.content;
  req.body.image ? post.image = req.body.image : post.image = post.image;
  req.body.tags ? post.tags = req.body.tags : post.tags = post.tags;

  console.log(post);
  
  res.json(posts)
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