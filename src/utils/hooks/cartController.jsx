import { useEffect, useReducer } from "react"
import {
  getLocalStorageItem,
  setLocalStorage,
} from "utils/helpers/localstorage"

const initialState = {
  cart: [],
  bookingCart: [],
  coupon: null,
}

const cloneToBookingCart = (cart) =>
{
  let bookingCart = []
  cart.map(item =>
  {
    const arr = new Array(parseInt(item.quantity)).fill({
      _id: item.data._id,
      title: item.data.title,
      packages: item.data.packages,
      tankType: "",
      packagesFeaturesTitles: item.data.packagesFeaturesTitles,
      plan: item.data.packages[1]?.name || item.data.packages[0]?.name,
      price: item.data.packages[1]?.price || item.data.packages[0]?.price,
    })
    bookingCart = [...bookingCart, ...arr]
  })
  return bookingCart
}
const reducer = (state, action) =>
{
  switch (action.type)
  {
    case "CLONE_CART":
      return {
        ...state,
        cart: action.payload,
      }
    case "ADD_TO_CART":
      if (state.cart.find(
        item => item.data._id === action.payload._id)) return state

      const addedCart = [
        ...state.cart,
        {
          data: action.payload,
          quantity: 1,
        },
      ]
      setLocalStorage(addedCart)
      return {
        ...state,
        cart: addedCart,
      }
    case "REMOVE_FROM_CART":
      const afterRemoveCart = state.cart.filter(
        item => item.data._id !== action.payload)
      setLocalStorage(afterRemoveCart)
      return {
        ...state,
        cart: afterRemoveCart,
      }
    case "EDIT_QUANTITY":
      const newCart = state.cart.map(item =>
        item.data._id === action.payload.id ?
          { ...item, quantity: action.payload.quantity } : { ...item })
      setLocalStorage(newCart)

      return {
        ...state,
        cart: newCart,
      }
    case "CLEAR_CART":
      setLocalStorage([])
      return {
        ...state,
        cart: [],
        count: 0,
      }
    case "CLONE_BOOKING_CART":
      const bookingCart = cloneToBookingCart(state.cart)
      return {
        ...state,
        bookingCart,
      }
    case "SET_ITEM_PLAN":
      const newBookingCart = state.bookingCart.map((item, index) =>
        // index === action.payload.index
          ({ ...item, plan: action.payload.plan, price: action.payload.price })
          // : { ...item }
      )
      return {
        ...state,
        bookingCart: newBookingCart,
      }
    case "SET_COUPON":
      return {
        ...state,
        coupon: action.payload,
      }
    default:
      return state
  }
}

const useCart = () =>
{
  const [state, dispatch] = useReducer(reducer, initialState)
  const { cart, bookingCart, coupon } = state

  const addToCart = (item) =>
  {
    dispatch({ type: "ADD_TO_CART", payload: item })
  }
  const removeFromCart = (id) =>
  {
    dispatch({ type: "REMOVE_FROM_CART", payload: id })
  }

  const editQuantity = (id, quantity) =>
  {
    if (quantity === ""){}
   else if (quantity <= 0) return
    dispatch({ type: "EDIT_QUANTITY", payload: { id, quantity } })
  }
  const clearCart = () => { dispatch({ type: "CLEAR_CART" }) }

  const cloneBookingCart = () => { dispatch({ type: "CLONE_BOOKING_CART" }) }

  const setItemPlan = (index, plan, price) =>
  {
    dispatch({ type: "SET_ITEM_PLAN", payload: { index, plan, price } })
  }

  const setCoupon = (coupon) =>
  {
    dispatch({ type: "SET_COUPON", payload: coupon })
  }

  useEffect(() =>
  {
    const cart = getLocalStorageItem("cart") || []
    dispatch({ type: "CLONE_CART", payload: cart })
  }, [])

  return {
    cart,
    bookingCart,
    coupon,
    addToCart,
    removeFromCart,
    editQuantity,
    clearCart,
    cloneBookingCart,
    setItemPlan,
    setCoupon,
  }

}

export default useCart

