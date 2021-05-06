const express = require('express');
const urlMetadata = require('url-metadata');
const app = express();
const port = 8080;

app.use('/pages/', require('./routes/pagesRoutes'));

app.post('/test', (req, res) => {
  urlMetadata("https://fr.wikipedia.org/wiki/%C3%89chafaudage").then((metadata) => {
    console.log(metadata);
    res.send(metadata);
  }, (error) => {
    res.send(error);
  })
  // res.send(req.query)
})

app.get('/', (req, res) => res.send('Express server.'))

app.listen(port, () => console.log(`Server run on http://localhost:${port}`));

