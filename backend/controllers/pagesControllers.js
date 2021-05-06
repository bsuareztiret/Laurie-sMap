const { getMetaData } = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');

exports.pagesController = async (req, res) => {
  const url = 'https://fr.wikipedia.org/wiki/Nelson_Mandela';
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetaData(doc, url);
  res.json({
    pagesList: ["page_1", "page_2"],
    other: metadata,
  })
}