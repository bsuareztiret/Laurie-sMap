const express = require('express');
const url = require('url');
const urlMetadata = require('url-metadata');
const app = express();
const port = 8080;

const array = ["https://stackoverflow.com/questions/2602043/rest-api-best-practice-how-to-accept-list-of-parameter-values-as-input",
"https://stackoverflow.com/questions/2602043/rest-api-best-practice-how-to-accept-list-of-parameter-values-as-input",
"https://stackoverflow.com/questions/2602043/rest-api-best-practice-how-to-accept-list-of-parameter-values-as-input",
"https://stackoverflow.com/questions/2602043/rest-api-best-practice-how-to-accept-list-of-parameter-values-as-input"];

app.use('/pages/', require('./routes/pagesRoutes'));

app.post('/scrapping', (req, res) => {
  // const urlParts = url.parse(req.url, true);
  // const query = urlParts.query;
  // console.log("REQUEST", query);
  const metas = array.map(async (link, index) => {
    console.log(index);
    const ok = await urlMetadata(link);
    return ok;
  //   urlMetadata(link).then((metadata) => {
  // })
  //   return metadata;
  // }, (error) => {
  //   res.send(error);
  })
  // res.send(req.query)
})

app.get('/', (req, res) => res.send('Express server.'))

app.listen(port, () => console.log(`Server run on http://localhost:${port}`));

