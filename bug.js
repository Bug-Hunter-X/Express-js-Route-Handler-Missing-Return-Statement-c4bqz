const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found'); //correct
  }
  res.send(userData); //this will send back the data correctly
});

app.get('/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user profile data based on userId ...
  if (!userProfileData) {
    res.status(404).send('User profile not found'); // BUG: Missing return statement
  }
  res.send(userProfileData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});