// Dependencies
// ===========================================================
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const uuid = require("uuid");


const app = express();
const data = ("./db/db.json");
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




// What routes do I need:
  // Home page (GET)
  // Notes page (GET)
  // API notes (GET)
  // API notes (POST)
  // API notes (DELETE)




app.get("/", (req, res) => {
  // should return to notes.html
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.get("/notes", (req, res) => {
  // should return to notes.html
  res.sendFile(path.join(__dirname, "public", "notes.html"));
});



// API Calls
// Here we get all notes
app.get("/api/notes", (req, res) => {
  
  // sould read the db.json file and return all saved notes
  
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    res.json(data);
  });
  
});

// Calling one note
app.get("/api/notes/:id", (req, res) => {
  res.json(data.filter(notes => notes.id === parseInt(req.params.id)));
});

/*
// Here we are creating a note
app.post('/api/notes', (req, res) => {
// should recieve new note to save and add to the db.json
  const createdNote = {title: req.body.title, text: req.body.text};
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    data.push(createdNote);
    data = JSON.stringify(data);
    fs.writeFile("./db/db.json", data, function (err) {
      if (err) throw err; 
    });

    res.json(createdNote);

  });
});
*/
app.post("/api/notes", (req, res) => {
  const newNote = {
    id: uuid.v4(),
    title: req.body.title,
    text: req.body.text
  }

  if (!newNote.title || !newNote.title) {
    res.status(400).json({ msg: "please include title and text"});
  } 
  data.push(newNote);
  res.json(data);
}); 



// This should delete notes
app.delete('/api/notes/:id', (req, res) => {
  // should recieve a query parameter with id of note to delete.
  
});





  // Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});