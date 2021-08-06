const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const note = require('./db/notes');
const db = require('./db.json');
// const characters = require('./characters');
// const logger = require ('./logger')

const PORT = process.env.PORT || 3001
notes = JSON.parse(fs.readFileSync('./db.json'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/notes',(req,res)=>{
res.json(notes)
return notes
})
app.post('/api/notes',(req,res)=>{
  const note = req.body
  const newNote = [...db,note]
  fs.writeFile('../db.json',JSON.stringify(newNote),(err)=>{
    if(err) throw err;
    res.send('add it')
  })
})





app.listen(PORT, ()=>console.log(`server started ${PORT}`));
app.use(express.static(path.join(__dirname,'public')));




