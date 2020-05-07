// Dependencies
// ===========================================================
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'html');

// What variables do I need:
const newTitle = [];
const newNote = [];
const deletedNote = [];



// What routes do I need:
  // Home page (GET)
  // Notes page (GET)
  // API notes (GET)
  // API notes (POST)
  // API notes (DELETE)

app.get('/', (req, res) => {
  // should return to the index.html
  res.sendFile(path.join(__dirname, 'public/index.html'));

});


app.get('/notes', (req, res) => {
  // should return to notes.html
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// API Calls

app.get('/api/notes', (req, res) => {
  // sould read the db.json file and return all saved notes
const newNote;
try { 
  newNote = fs.readFileSync('db/db.json');
  newNote = JSON.parse(newNote);
} catch (err) {
  console.log(err);
}
res.json(newNote);
});

app.post('/api/notes', (req, res) => {
// should recieve new note to save and add to the db.json
try {
  newNote = fs.readFileSync('db/db.json');
  newNote = JSON.parse;
  newNote.push(req.body)

  newNote = (JSON.stringify(newNote));

  fs.writeFile('db/db.json', newNote => {
    if (err) throw err;
  })
}
});


app.delete('/api/notes/:id', (req, res) => {
  // should recieve a query parameter with id of note to delete.
});






  // Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});