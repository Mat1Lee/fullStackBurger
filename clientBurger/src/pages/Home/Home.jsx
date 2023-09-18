import { Button } from 'antd'
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TableItem from '../../components/TableItem/TableItem'
import { getData } from '../../features/CartSlice/CartSlice'
import { checkAd } from '../../features/type/type'
import './Home.css'
import Header from '../../components/Header/Header'
function Home({ getData }) {
  const token = localStorage.getItem('accessToken')
  console.log(token.role,'roleeee');
  const { total, isLoading, cartItems } = useSelector(store => store.cart)

  const navigate = useNavigate()
 


  const handleCheckOut = () => {
    localStorage.setItem('price', total);
    navigate('/checkout')
  }
 
   useEffect(() => {
    getData()
    
  }, [])
  return (
    <>
    {/* <Header/> */}
      <div className="home">
        <div className="view">
          <div className="view__outline">
            <div className="view__outline__backgrond"></div>
            <div className="view__item">
              <span>Bacon</span>
            </div>
            <div className="view__item">
              <span>Chicken</span>
            </div>
            <div className="view__item">
              <span>Chesse</span>
            </div>
            <div className="view__item">
              <span>Sallad</span>
            </div>
            <div className="view__outline__backgrond1"></div>
          </div>
        </div>
        <div className="formSelect">
          <div className="formSelect__price">
            <span>Price</span>
            <span>{'  '}</span>
            <span>{total}$</span>
          </div>
          {isLoading ? <div><h1>Loading...</h1></div> : <div className="tableData">
            {
              cartItems?.map((item, key) => (
                <TableItem key={key} {...item} />
              )
              )
            }
          </div>
          }

        </div>
        <Button onClick={() => {
          handleCheckOut()
        }}>Order</Button>
      </div>


    </>
  )
}


const matState = () => {
  return {

  }
}

const matStateDis = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    // totalPrice: () => dispatch(totalPrice())
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(matState, matStateDis)(Home)
