const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());


const catagories = require('./data/catagories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Course api running')
})

app.get('/catagories', (req, res) => {
    res.send(catagories);
})


app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/catagories/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCategory = courses.filter(c => c.category_id === id)
    res.send(selectedCategory);
});


app.listen(port, () => {
    console.log('News server is running on port', port)
})