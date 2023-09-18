const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BurgerColection  = require('./Modal')
const Order = new Schema({
date:{type:String,maxLength:100,
require:true
},
name:{type:String,maxLength:100,
require:true
},
address:{type:String,maxLength:100,
require:true
},
email:{type:String,maxLength:100,
require:true
},
id:{type:String,maxLength:100,
  require:true
  },
 cartItems:{type:Array,maxLength:400,
  require:true
  },
phone:{type:String,maxLength:100},
total:{type:String,maxLength:100},
createdAt: { type: String, default:new Date().toLocaleDateString().slice(0,10)}
});
// , { timestamps: true })

const OrderCollection = mongoose.model('orders',Order,'orders');
module.exports = OrderCollection