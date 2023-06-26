const express = require('express');
const cors = require('cors');
const app = express();
const port = 4017;

app.use(express.json());
app.use(cors());

const moviesData = require('./movies.json');

// GET request
app.get('/', (req, res) => {
    res.send("hello world");
});



// post request route with validation
app.post('/getData', (req, res, next) => {
  if(!req.body || !req.body.name || !req.body.email){
    return res.status(400).json({error: 'provide required fields'});
  }
});


// error handler request
app.use((error, req, res, next) =>{
console.error(err.stack);
res.status(500).send('internal server error');
})

// MoviesList Api
app.get('/get/movieslist', (req, res) => {
    res.send(moviesData);
});


app.listen(port, () => {
    console.log(` server running on port ${port}`);
});
