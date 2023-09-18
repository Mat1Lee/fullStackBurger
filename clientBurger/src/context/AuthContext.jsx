// import { createContext, useEffect, useState } from "react";
// import { auth } from "../firebase";

// import { onIdTokenChanged } from "firebase/auth";

// export const AuthContext = createContext();
// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState({});
//   useEffect(() => {
//     const unsub = auth.onIdTokenChanged((user) => {
     
//       setCurrentUser(user);

//     });

//     return () => {
//       unsub();
//     };


//   }, []);
//   return (
//     <AuthContext.Provider value={{currentUser}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
