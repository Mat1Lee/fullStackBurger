import { createContext, useContext } from "react";
import {
  Navigate,
  Outlet,
  createBrowserRouter
} from "react-router-dom";
// import { createContext } from "";
import { checkAd } from "../features/type/type";
import ErrorPage from "./ErrorPage";
// import { AuthContext } from '../context/AuthContext';

import ExamCheck from "../components/examCheckOut/ExamCheck";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regis from "../pages/Regis/Regis";
import Header from "../components/Header/Header";
import Dasboard from "../pages/Admin/Admin";
export const AuthContext = createContext();

export const ProContextAuth = () => useContext(AuthContext)

// eslint-disable-next-line react/display-name

// const AuthLayout = (() => {
//   const [currentUser, setCurrentUser] = useState({});
//   useEffect(() => {
//     const id = localStorage.getItem('user')
//       setCurrentUser(id);
//        if(id == null){
//         navigate('/login');
//        }


//   }, [])


//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       <Outlet />
//     </AuthContext.Provider>
//   );
// });

export const ProtectedRoute = () => {

  const accessToken = localStorage.getItem('accessToken')


  if (!accessToken) {
    console.log('navigate')
    return <Navigate to='/login' />
  }
  return (
    <>
      <Header />
      <Outlet />;
    </>
  )

};

const routerU = ([
  {
    element: <Login />,
    path: '/login'
  },

  {
    element: <Regis />,
    path: '/register'
  },
  
 
  {
    element: <ProtectedRoute />,
    errorElement:<ErrorPage/>,
    path: '/',
    children: [
      {

        element: <Home />,
        path: '/'

      },
      {

        element: <ExamCheck />,
        path: '/checkout'

      },

    ]
    // },
    // ]
  },


])


const routersUser = createBrowserRouter(routerU)


export default routersUser












