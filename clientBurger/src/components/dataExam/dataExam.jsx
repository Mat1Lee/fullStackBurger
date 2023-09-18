import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useCallback } from 'react';
import { chunk } from 'lodash';
const DataExam = (allPay) => {
  console.log(allPay.props);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Bacon',
      dataIndex: 'bacon',
    },
    {
      title: 'Sallad',
      dataIndex: 'sallad',
    },
    {
      title: 'Chesse',
      dataIndex: 'chesse',
    },
    {
      title: 'Chicken',
      dataIndex: 'chicken',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Total $',
      dataIndex: 'total',
    },
  ];
  const data = [];
  allPay.props.map((item,index)=>{
    
    data.push({
  key: index,
  name: item.name,
  email: item.email,
  address: item.address,
  bacon:item.cartItems[0]?.amount || '0',
  chesse:item.cartItems[1]?.amount || '0',
  chicken:item.cartItems[2]?.amount|| '0',
  sallad:item.cartItems[3]?.amount  || '0',
  date:item.createdAt.slice(0,10),
  total:item.total
});

})
// console.log('dataPayOrder: ',data);
// const data1 = chunk(data,3)

  // const xulyData=useCallback((myArray,value)=>{
  //   let results = [];

  //   while (myArray.length) {
  //       results.push(myArray.splice(0,value));
  //   }

  //   return results
  // },[data])
  // const data1=  xulyData(data,2)
  // console.log(data1);
  return <Table  pagination={{pageSize:2}} columns={columns} dataSource={data} />;
};
export default DataExam;