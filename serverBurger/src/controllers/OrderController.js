const OrderCollection = require('../config/OrderModal');

class OrderController {
  letOrder =async(req,res)=>{
    // console.log(req.body);
    try {
      const values = req.body;
      // console.log(values);
      const orderValue = new OrderCollection(values)
     
        const order = orderValue.save()
        console.log(order);
        res.status(200).json({
          success:true,
          meessage:'order success'
        })
    } catch (error) {
      console.log(error);
    }

  }
 
  /**
 * Finds an order by ID and sends it as a response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
findOrder = async (req, res) => {
  // Extract the id from the request parameters
  const { id } = req.params;

  try {
    // Find the order with the specified id
    const listOrder = await OrderCollection.find({ id });

    // Send the found order as the response
    res.send(listOrder);
  } catch (error) {
    console.log(error);
  }
}
  findAllOrder =async(req,res)=>{
    try {
      const allOrder = await OrderCollection.find({})
      res.send(allOrder)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new OrderController