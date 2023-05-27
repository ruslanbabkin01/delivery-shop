import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const VITE_BASE_URL = 'https://delivery-shop-ii9s.onrender.com/api'
const VITE_BASE_URL = 'http://localhost:5555/api'

export const deliveryShopAPI = axios.create({
  baseURL: VITE_BASE_URL,
})

export const fetchShops = createAsyncThunk(
  'shops/getShops',
  async (_, thunkApi) => {
    try {
      const { data } = await deliveryShopAPI.get('/shops')
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const fetchShopsProducts = createAsyncThunk(
  'products/getProducts',
  async (shopsId, thunkApi) => {
    try {
      const { data } = await deliveryShopAPI.get(`/products/${shopsId}`)
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const createOrder = createAsyncThunk(
  'order/addOrder',
  async (_, thunkApi) => {
    const store = thunkApi.getState()
    const { userData, order, totalPrice } = store.general

    const productsOrder = order.map(({ _id, owner, quantity }) => ({
      productId: _id,
      quantity,
      shop: owner,
    }))

    console.log(productsOrder)

    const orderData = {
      totalPrice,
      ...userData,
      shop: productsOrder[0].shop,
      products: productsOrder,
    }
    console.log(orderData)
    try {
      const { data } = await deliveryShopAPI.post(`/orders`, orderData)
      return data
    } catch (e) {
      return thunkApi.rejectWithValue(e.message)
    }
  }
)

export const fetchOrderHistory = createAsyncThunk(
  'order/getOrder',
  async (reqData, thunkApi) => {
    try {
      const { data } = await axios.get('/api/orders', reqData)
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
