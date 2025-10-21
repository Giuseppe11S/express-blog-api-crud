
// funzione che gestisce gli errori nel caso la rotta è insesitente
const notFound = (req, res, next) => {

  // status 404
  res.status(404);
  res.json({
    error: 'Non trovato',
    message: 'Pagina non trovata',
  });

}

module.exports = notFound;