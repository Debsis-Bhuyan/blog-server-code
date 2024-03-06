const express = require('express')
const app = express()
const cors = require('cors')
const blogs = require('./blog-data/blogsData.json')
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Blog server is running!")
});

app.get('/api/blogs', (req, res) => {
  res.send(blogs)
})
app.get('/api/blog/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
  
  const blog = blogs.filter(b => b.id === id);
  
  res.send(blog)
  } catch (error) {
    console.log(error)
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})