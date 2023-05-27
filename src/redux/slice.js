import { createSlice } from '@reduxjs/toolkit'
import {
  fetchShopsProducts,
  fetchShops,
  createOrder,
  fetchOrderHistory,
} from './operations'
import { toast } from 'react-toastify'

const initialState = {
  error: null,
  isLoading: false,
  shops: [],
  activeShop: null,
  activeProducts: [],
  order: [],
  totalPrice: 0,
  userData: { name: '', address: '', email: '', phone: '' },
  orderHistory: [],
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setActiveShop(state, action) {
      state.activeShop = action.payload
    },
    setInOrder(state, action) {
      const productId = action.payload
      const searchedProduct = state.activeProducts.find(
        product => product._id === productId
      )

      // const searchedShop = state.shops.find(({ _id }) => _id === shop)
      // const searchedProduct = searchedShop?.products?.find(
      //   ({ _id }) => _id === productId
      // )

      if (searchedProduct) {
        if (
          state.order.length === 0 ||
          state.activeShop === searchedProduct.owner
        ) {
          searchedProduct.quantity = 1
          state.totalPrice += searchedProduct.quantity * searchedProduct.price
          state.order.push(searchedProduct)
          toast.success(`${searchedProduct.name} added from cart`)
        } else {
          toast.info('you can only add products from one shop to your order')
        }
      } else {
        toast.error('Product not found')
      }
    },

    deleteFromOrder(state, action) {
      state.order = state.order.filter(product => {
        if (product._id === action.payload) {
          toast.success(`${product.name} deleted from cart`)
          state.totalPrice -= product.quantity * product.price
          return false
        }
        return true
      })
    },

    setUserData(state, action) {
      state.userData = action.payload
    },

    updateQuantity(state, action) {
      const { id, totalQuantity } = action.payload
      state.order = state.order.map(product => {
        if (product._id === id) {
          state.totalPrice += (totalQuantity - product.quantity) * product.price
          product.quantity = totalQuantity
        }
        return product
      })
    },

    checkTotalPrice(state) {
      state.totalPrice = state.order.reduce(
        (acc, { price, quantity }) => quantity * price + acc,
        0
      )
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchShops.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.isLoading = false
        state.shops = action.payload
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchShopsProducts.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchShopsProducts.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload.length === 0) {
          state.activeProducts = null
          return
        }
        const { shop: shopId = null } = action.payload[0]
        state.shops = state.shops.map(shop => {
          if (shop._id === shopId) {
            shop.products = action.payload
          }
          return shop
        })
        state.activeProducts = action.payload
      })
      .addCase(fetchShopsProducts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(createOrder.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, state => {
        state.isLoading = false
        state.order = []
        state.totalPrice = 0
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(fetchOrderHistory.pending, state => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchOrderHistory.fulfilled, (state, action) => {
        state.isLoading = false
        state.orderHistory = action.payload
      })
      .addCase(fetchOrderHistory.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      }),
})

export const {
  setInOrder,
  deleteFromOrder,
  setUserData,
  updateQuantity,
  checkTotalPrice,
  setActiveShop,
} = generalSlice.actions

export const generalReducer = generalSlice.reducer
