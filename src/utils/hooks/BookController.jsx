import { useEffect, useReducer } from "react";

const initialState = {
  cart: [],
  count: 0,
}

const reducer = (state, action) =>
{
  const calculateCount = (cart) => cart.reduce(
    (acc, item) => acc + item.quantity, 0)
  switch (action.type)
  {
    case "CLONE_BOOKING_CART":
      return {
        ...state,
        cart: action.payload,
        count: calculateCount(action.payload),
      }
    case "ADD_TO_CART":
      if (state.cart.find(
        item => item.data._id === action.payload._id)) return state
      const newCart = [
        ...state.cart,
        {
          data: action.payload,
          quantity: 1,
        },
      ]
      localStorage.setItem("cart", JSON.stringify(newCart))
      return {
        ...state,
        cart: newCart,
        count: calculateCount(newCart),
      }
  }
}

const useAddToCart = () =>
{
  const [state, dispatch] = useReducer(reducer, initialState)
  const { cart, count } = state
  const addToCart = (item) => dispatch({ type: "ADD_TO_CART", payload: item })

  useEffect(() =>
  {
    const cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) dispatch({ type: "CLONE_BOOKING_CART", payload: cart })
  }, []);

  return { cart, count, addToCart }
}