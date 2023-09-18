const mongoose = require("mongoose");

//Model : Mongoose cho phép bạn định nghĩa cấu trúc dữ liệu của tài liệu (document) MongoDB và tạo ra các "model" dựa trên cấu trúc này để tương tác với cơ sở dữ liệu MongoDB.
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Burger = new Schema({
 
  
  id:{type:String, maxLength:100 ,
    required: true},
  amount:{type:String, maxLength:100,
  required: true
},
  title:{type:String, maxLength:100,
  required: true
},
  price:{type:String, maxLength:100,
  required: true
},
 
// timestamps:true
  
});

const BurgerColection = mongoose.model('burgers',Burger,'burgers')
module.exports = BurgerColection