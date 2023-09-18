import React from 'react'
import './BurgerItem.css'
export default function BurgerItem() {
  const data =[
    {
      name:'Bacon',
      sl:1
    },
    {
      name:'Chesse',
      sl:1
    },
    {
      name:'Chicken',
      sl:1
    },
    {
      name:'Sallad',
      sl:1
    }
  ]

  
  return (
    <>
     <div className="view__outline__backgrond"></div>
    {data.map((item,index)=>{
 <div className="view__item" key={index}>
              <span>{item.title}</span>
            </div>
    })}
    <div className="view__outline__backgrond1"></div>
    </>
    
  )
}
