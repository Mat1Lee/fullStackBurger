import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  cartItems: [],
  payUser: [],
  userPayOrder: [],
  allPay: [],
  listUser:[],
  amount: 0,
  total: 0,
  isLoading: false,
}


const totalPrice_ = (state) => {
  let amount, price = 0;
  if (state.cartItems != null) {
    // state.cartItems.reduce
    state?.cartItems?.map((item) => {
      amount += item.amount;
      price += item.amount * item.price
    })
  }
  state.amount = amount,
    state.total = price.toFixed(2)
  return state
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // extraReducers:{
  //   [getItems.pending]:(state)=>{
  //     state.isLoading = true
  //   },
  //   [getItems.fulfilled]:(state,action)=>{
  //     state.isLoading= false
  //     state.cart = action.payload
  //   },
  //   // [getDataUserPay.pending]:(state,action)=>{
  //   //   state.isLoading = true
  //   //   state.userPayOrder = action.payload
  //   // },
  //   [getDataUserPay.fulfilled]:(state,action)=>{
  //     // state.isLoading = false
  //     state.userPayOrder = action.payload
  //   },

  // },
  // extraReducers:{
  //       [getData.pending]:(state)=>{
  //         state.isLoading= true
  //       },
  //        [getData.fulfilled]:(state,action)=>{
  //         state.isLoading=false,
  //         state.cartItems= action.payload
  //        },
  // },
  reducers: {
    getData: (state) => {
      state.isLoading = true
    },
    getDatauser:(state)=>{
      state.isLoading = true
    },
    getDataFulfliled: (state) => {
      state.isLoading = false
    },
    getItemCart: (state, action) => {


      state.cartItems = action.payload
      // state.isLoading = false
    },
    getAllCartPay: (state, action) => {
      state.allPay = action.payload
      // state.isLoading = false
    },
    getAllUser:(state,{payload})=>{
      state.listUser = payload
    },
    //  clearCart: (state) => {
    //   state.cartItems = [];
    // },
    // search:(state,payload)=>{

    // }
    increase: (state, { payload }) => {
      if (state.cart !== null) {
        const cartItemPlus = state?.cartItems?.find((item) => item.id === payload.id);
        cartItemPlus.amount = cartItemPlus.amount + 1;

        totalPrice_(state);

      } else console.error('errr');
    },
    decrease: (state, { payload }) => {
      const cartItemDe = state?.cartItems?.find((item) => item.id === payload.id);
      if (cartItemDe.amount >= 1) cartItemDe.amount = cartItemDe.amount - 1;

      totalPrice_(state);

    },

    addPay: (state, action) => {
      state.payUser = action.payload

    }
  },

})


export const { getItemCart,getDatauser, getDataFulfliled,getAllUser, getData, getAllCartPay, clearCart, removeItem, increase, decrease, addToCart } =
  cartSlice.actions;
export const selectDataLoading = (state) => state.cart.isLoading
export default cartSlice.reducer;