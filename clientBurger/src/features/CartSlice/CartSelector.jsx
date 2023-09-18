import { createSelector } from "@reduxjs/toolkit";

const selecPay =(state)=> state.cart.allPay

export const selecpayByName =(name)=>{
  createSelector(selecPay,(items)=>{
    items.filter(item=>item.name===name)
  })
}