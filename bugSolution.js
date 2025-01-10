const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

app.get('/users/:id/profile', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user profile data based on userId ...
  if (!userProfileData) {
    return res.status(404).send('User profile not found'); //Corrected: Added return statement
  }
  res.send(userProfileData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});