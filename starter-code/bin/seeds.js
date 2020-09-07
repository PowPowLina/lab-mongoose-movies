const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrities', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

const celebrities =
[
  {
    name: 'Amelie Family',
    occupation: 'actor',
    catchPhrase: 'I am what I am!'
  },
  {
    name: 'Marco Polo',
    occupation: 'comedian',
    catchPhrase: 'Where am I?'
  },
  {
    name: 'Frieda Nieda',
    occupation: 'singer',
    catchPhrase: 'I will be there!'
  }  
];

Celebrity.insertMany(celebrities)
.then(data => {
    console.log(`Success! Added ${data.length} celebs to the database`);
    mongoose.connection.close();
})
.catch(err => {
  console.log(err);
});