import {  configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import cartReducer from '../CartSlice/CartSlice'
// import {} from 're'
import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
      cart: cartReducer,
      
    },
    middleware:[sagaMiddleware]
   
  } 
  );
  sagaMiddleware.run(rootSaga)
  
export default store
