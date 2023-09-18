// const ViewRouter = require('./viewRouter')
// const HomeRouter = require('./homeRouter')
const { Router } = require("express");
const UserMid = require('../middleware/userMidle');
const Controller = require('../controllers/ViewController');
const UserController = require('../controllers/UserControler')
const OrderController = require('../controllers/OrderController')
 
const router = Router();
// tranh dat ten router dac thu 
router.get("/getallitem", Controller.getItems);
router.get("/getUser/:id",UserController.getUserById);
router.get('/getitem/:id',Controller.getItembyId);
router.get('/orderlist/:id',OrderController.findOrder);
router.get('/allOrder',OrderController.findAllOrder)
router.get('/admin-dashboard',UserMid.authenticateToken,UserMid.isAdmin)
  // Only users with "admin" permission can access this );

// Protected route that requires "editor" permission

router.get('/listUsers',UserController.getListUsers);
router.get('/listDayOrder',Controller.getListDayOrder);
router.post("/additem",UserMid.authenticateToken,UserMid.isAdmin, Controller.addItem);

router.put("/updateitem/:id",UserMid.authenticateToken,UserMid.isAdmin, Controller.updateItem);

router.delete("/deleteitem/:id",UserMid.authenticateToken,UserMid.isAdmin, Controller.deleteItem);
router.post("/register/", UserController.register);
router.post("/signIn/", UserController.signIn);

router.post("/signOut/", UserController.signOut);

router.post("/orderItem",OrderController.letOrder)

 module.exports = router