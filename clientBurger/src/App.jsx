import './App.css'
import routersUser from './router/userRouter.jsx'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './features/store/store.jsx'
function App() {
  
  return (
    <>
     <Provider store={store}>
     
     <RouterProvider router={routersUser} />
      
    
    </Provider>
    </>
  )
}

export default App
