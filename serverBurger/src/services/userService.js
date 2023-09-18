import BurgerColection from "../config/Modal"
export class UserService{

deleteItem =(id)=>{
return BurgerColection.findByIdAndDelete(id)
}
}