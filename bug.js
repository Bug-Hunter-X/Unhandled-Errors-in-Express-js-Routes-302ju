const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found'); // Correct error handling
  }
  res.json(userData);
});

app.get('/users', (req, res) => {
  // ... some database query to fetch all users ...
  if(error){
    return res.status(500).send('Database error');
  }
  res.json(users);
});

app.listen(3000, () => console.log('Server listening on port 3000'));