const UserCollection = require('../config/UserModal')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../config/UserConFig')
const authenticateToken = require('../middleware/userMidle');
class UserController {
 

  //Authentication quá trình xác minh danh tính của người dùng. Điều này thường được thực hiện bằng cách yêu cầu người dùng cung cấp thông tin xác thực, chẳng hạn như tên người dùng và mật khẩu
// Authorization là quá trình cấp cho người dùng được xác thực quyền truy cập vào tài nguyên. Điều này thường được thực hiện bằng cách kiểm tra quyền của người dùng dựa trên ma trận quyền.
  register =async(req,res)=>{
    const {name,password,id,email} = req.body;
  
    try {
      const newUser = new  UserCollection({
        name,
        email,
        password,
        id,
      })
      await newUser.save();
      console.log('Đăng kí thành công');
      res.send({
        role
      })
    } catch (error) {
      console.log(error);
    }

  }
  
  signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          message: 'Please provide an email and password',
        });
      }
  
      const user = await UserCollection.findOne({ email });
  
      if (!user) {
        return res.status(400).json({
          message: 'User not found',
        });
      }
  
      const isMatched = await bcrypt.compare(password, user.password);
  
      if (!isMatched) {
        return res.status(400).json({
          message: 'Incorrect password',
        });
      }
  
      const accessToken = jwt.sign({ user }, key.secret, {
        expiresIn: '2 days',
      });
  
      return res.status(200).json({
        success: true,
        user,
        accessToken,
      });
    } catch (error) {
      // Handle the error appropriately
      console.log(error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };
  signOut = async (req, res,next) => {
    try {
      req.session = null;
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      next(err);
    }
  };
  getListUsers = async(req,res)=>{
    try {
      const list = await UserCollection.find({})
   
     res.send(list)
    } catch (error) {
      console.log(error);
    }
    
  }
  getUserById = async(req,res)=>{
    const {id}= req.params
    try {
      const user = await UserCollection.findById(id)
      res.send(user)
      
    } catch (error) {
      console.log(error);
    }
    
  }
}
module.exports = new UserController