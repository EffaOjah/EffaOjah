const express = require('express');
const app = express();
const port = 3000;

// Sample data (for demonstration purposes)
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
];

// Middleware for parsing JSON request bodies
app.use(express.json());

// Route to get a list of all books
app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const book = books.find(book => book.id === id);                                                   if (!book) { 
     return res.status(404).json({ error: 'Book not found' }); }
      res.json(book); }); 
      // Start the server
       app.listen(port, () => { 
       console.log(`Server is running on port ${port}`); });
