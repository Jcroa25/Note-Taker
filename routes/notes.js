const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

    if (title&&text) {

        const newNote = {
            title,
            text,
            id: uuid(),
            
        };

    readAndAppend(newNote, './db/notes.json');
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;