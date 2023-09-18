import axios from 'axios';
import { AdminSer } from '../service/AdminService';

const baseUrl = 'http://localhost:3005/';

// Get all items
export const getItems = async () => {
  try {
    const allItems = await AdminSer.getItem();
    return allItems.data;
  } catch (error) {
    console.log('Failed to get data.');
    return undefined;
  }
};

// Delete an item by ID
export const deleteItem = async (id) => {
  try {
    const res = await AdminSer.deleteItem(id);
    return res;
  } catch (error) {
    console.log('Failed to delete item.');
  }
};

// Update an item by ID
export const updateItem = async (id, values) => {
  try {
    const res = await AdminSer.updateItem(id, values);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Create a new item
export const createItem = async (values) => {
  try {
    const res = await AdminSer.createItem(values);
    console.log('Add item success');
    return res;
  } catch (error) {
    console.log('Failed to add item.');
  }
};

// Get all orders
export const getAllOrder = async () => {
  try {
    const res = await AdminSer.getAllOrder();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Get list of day orders
export const listDayOrder = async () => {
  try {
    const res = await AdminSer.listDayOrder();
    return res;
  } catch (error) {
    console.log(error);
  }
};

// User

// Sign up a user
export const signUpUser = async (value) => {
  try {
    await axios.post(`${baseUrl}register`, { ...value });
  } catch (error) {
    console.log(error);
  }
};

// Log in a user
export const loginUser = async (values) => {
  try {
    const res = await AdminSer.loginUser(values);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get list of all users
export const getListUser = async () => {
  try {
    const res = await AdminSer.getAllUser();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Get user by ID
export const getUserById = async (id) => {
  try {
    const res = await AdminSer.getUserById(id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};