const express = require('express');
const app = express();
const pets = require('./data.js');

app.use('/public', express.static(__dirname + '/public'));

app.get('/pets', (req, res) => { // call the /pets folder to retrieve the array in data.js
  res.send(pets); // response that sends the pets information to then be displayed
})

app.get('/pets/:name', (req, res) => {
  const name = req.params.name;
  const pet = pets.find(pet => pet.name === name); 
           // use .find so we can search through the pets array and return the pet info
                        // "pet" represents the individual pet info in the array, 
                        // "pet.name" looks for the name, 
                        // "===" makes it an exact match from array and URL name, 
                        // "name" holds the value of the name in the URL
  res.send(pet); // Respond with the Array's listed pet's information
});

app.get('/pets/:name', (req, res) => {
  const petName = req.params.name; // similar to the code above for finding pets
  const ownerName = req.query.owner; // Get the owner's name from the query string
  const pet = pets.find(pet => pet.name === petName && pet.owner === ownerName);
  res.send(pet);
});


const PORT = 8000 // set up so local server and punch "http://localhost:8000" into my browser
app.listen(PORT, () => { //app.listen to start the server and makes it listen for incoming requests
  console.log(`Server is running on port ${PORT}`) // confirm in the terminal that we jammin'
});
