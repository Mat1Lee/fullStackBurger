const BurgerColection = require('../config/Modal')
const OrderCollection = require('../config/OrderModal')
class Controller {

  getItembyId = async(req,res)=>{
    const {id} = req.prams
    const item = await BurgerColection.findById(id)
 
    res.send(item)
  }
  getItems = async (req, res) => {
    // console.log(req.body,'getItem');
    const items = await BurgerColection.find();
    // res.status(200).json(items)
    console.log(items);
    res.send(items);
  };
  addItem = async (req, res) => {
    const {title,id,amount,price} = req.body
    
    try {
      const newItem = new BurgerColection({
        // values
        title,
        id,
        amount,
        price,
      })
      const itemAdd = await newItem.save();
      // console.log(itemAdd,'itemAdd');
      res.send({});
   } catch (error) {
   
   }
    // BurgerColection
    //   .create({ values })
    //   .then((data) => {
    //     console.log("Added Successfully...")
    //     console.log(data)
    //     res.send(data)
    //   })
    //   .catch((err) => console.log(err));
  }
  deleteItem = async (req, res) => {
    // const { _id } = req.body;
   
    const {id} = req.params;

    try {
      await BurgerColection.findByIdAndDelete(id)
      res.set(201).send('Delete Successfully')
    } catch (error) {
      console.log(error);
    }

  }
  updateItem = async(req,res)=>{
    const values = req.body
    // console.log(object);
 
    try {
      const dbUp = await BurgerColection.findByIdAndUpdate(
        req.params.id,
        values
        
        );
    
        res.json(dbUp);
      } catch (err) {
        console.log(err);
        res.status(500).send(`Server error`);
      }
  }
  
  getListDayOrder = async (req, res) => {
    const curentDate = new Date();
    const date = curentDate.toLocaleDateString().slice(0,10);
    
    // console.log(req.body,'getItem');
    const items = await OrderCollection.find({createdAt:  date});
    console.log(items,'adasd');
    console.log(items);
    res.send(items);
  }

}
module.exports = new Controller