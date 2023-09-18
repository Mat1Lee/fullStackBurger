import { InputNumber } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../../features/CartSlice/CartSlice';
import './TableItem.css';
export default function TableItem({  price, id, amount, title }) {

  const dispatch = useDispatch()

  return (
    <>
      <div className="tableData__Item">
        <div className="tableData__item__info">
          <span>{title}</span>
          <span>{"   "}</span>
          <span>{price}$</span>
        </div>
        <div className="item__button">

          <button className='dec' onClick={() => { dispatch(decrease({ id })) }}>-</button>
          <InputNumber value={amount} />
          <button className='inc' onClick={() => {

            dispatch(increase({ id }))
          }}>+</button>

        </div>


      </div>
      <hr />


    </>
  )
}
