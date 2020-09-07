const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebritySchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
      },
      occupation: {
      type: String,
      enum: ['actor', 'singer', 'songwriter','comedian', 'gamer', 'unknown']
    },
    catchPhrase:{
        type: String,
        required: true,
        unique: true
      } 
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;