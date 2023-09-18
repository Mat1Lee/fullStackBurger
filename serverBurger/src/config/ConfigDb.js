const mongoose = require('mongoose');

async function connect(){
try {
  await mongoose.connect('mongodb://localhost:27017/burger');
  console.log('Connect success');
} catch (error) {
  console.log('Connected Failed');
}

}
module.exports = connect