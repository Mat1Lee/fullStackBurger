import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getAllCartPay, getData,getDatauser, getDataFulfliled, getItemCart,getAllUser } from '../CartSlice/CartSlice';
import { getAllOrders,getAllOrderItems,getItems,postOrder, getListUser } from '../type/type';

// User type
export function* getAlluser(){
  try {
    const res = yield call(getListUser);
    yield put(getAllUser());
    yield put(getDataFulfliled());
    return res
  } catch (error) {
    console.log(error);
  }
}
function* fetchDataUser (){
  try {
      yield all([
        call(getAlluser)
      ])
  } catch (error) {
    console.log(error);
  }
}
// Order type
export function* getAllData(){
  try {
    const res = yield call(getItems);
    console.log(res);
    yield put(getItemCart(res.data))
    yield put(getDataFulfliled())
  } catch (error) {
    console.log(error);
  }
}

export function* getAllItems (){
  try {
    const dataItems = yield call(getAllOrderItems)
    
   
    yield put(getItemCart(dataItems));
    yield put(getDataFulfliled())
  } catch (error) {
    console.log(error);
  }
}

export function* getAllOrder() {
  try {
    const res = yield call(getAllOrders)
    
    yield put(getAllCartPay(res))
  } catch (error) {
    console.error(error, 'dataPay');
  }

}

function* compySaga() {
  yield takeLatest(getData.type, fetchDataCart);
  yield takeLatest(getDatauser.type,fetchDataUser )
}
function* fetchDataCart() {
  try {
    yield all([
      call(getAllData),
      call(getAllOrder),
      // call(getAlluser)
    ])
  } catch (error) {
    console.log(error);
  }
}


export default function* rootSaga() {
  try {
    yield all([fork(compySaga)])
  } catch (error) {
    console.log(error);
  }

}

