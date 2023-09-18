const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('B4c0//', salt);

// const ObjectId = Schema.Types.ObjectId;

const User = new mongoose.Schema({
  
  name: {type:String, maxLength:100,
  require:true
  },
  email: {type:String, maxLength:100,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    },
  require:true
  },
  password: {type:String, maxLength:100,
  require:true
  },
  id: {type:String, maxLength:100,
  require:true
  },
  role: {type:String, maxLength:100,
    // enum:
    default:'admin',
  require:true
  },
 

}) 
 //mã hóa password
 User.pre('save', async function (next) {
    if(!this.isModified('password')){
        next();
    };
    this.password = await bcrypt.hash(this.password,10)
    
});

// // so sánh before && after passW
//  const comparePassword = function (password) {
//  return bcrypt.compare(password, this.password)
// };
const UserCollection = mongoose.model('users',User)
module.exports = UserCollection
// module.exports = comparePassword