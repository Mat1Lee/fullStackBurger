const jwt = require('jsonwebtoken');
const key = require('../config/UserConFig')
class UserMid {
  authenticateToken(req, res, next) {
   
    const authorization = req.get('authorization')
    
  if (typeof authorization === 'undefined') {
    return
  }
 else {
   jwt.verify(authorization,  key.secret, (err, decoded) => {
  
    if (err) next();// Forbiddenz
 
    //gửi thông tin người dùng sau khi được giải mã
    req.user = decoded
    next() ;
  });
 }
  // Unauthorized
    // decoded token đã được mã hóa về dữ liệu đầu vào
 
}
//  authorize(permission) {
//   return (req, res, next) => {
//     const user = req.user; // Assuming user information is available in the request after authentication

//     // Check if the user has the required permission
//     if (user.permissions.includes(permission)) {
//       next(); // User is authorized
//     } else {
//       res.status(403).send('Forbidden'); // User is not authorized
//     }
//   };

isAdmin(req, res, next) {
  const {user} = req.user;
  // thông tin người dúng 

  if (user && user.role === 'admin') next();

    else{
      
      res.status(403).send({ message: "Require Admin Role!" });
     
       
      }
      return
  // User has the "admin" role; proceed to the route
  
  
 
}
}
// Cannot set headers after they are sent to the client: là khi có nhiều hươn 1 hành động send trên 1 req mình nên send ở hàm cuối cùng sau khi chạy qua midleware

module.exports = new UserMid;
