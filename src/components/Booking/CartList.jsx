import { BuyCard } from "components/Booking/BuyCard"

export const CartList = (cart, setCart) =>
{
  const handleRemove = (id) =>
  {
    setCart(cart.filter(item => item._id !== id))
  }
  const handleEditQuantity = (id) => (e) =>
  {
    setCart(cart.map(item => item._id === id
      ? { ...item, quantity: e.target.value }
      : { ...item }))
  }

  return (
    <ul>
      { cart.map((item, i) => (
        <BuyCard
          key={ item._id }
          quantity={ item.quantity }
          setQuantity={ handleEditQuantity(item._id) }
          handleRemove={ () => handleRemove(item._id) }
          { ...item }/>
      )) }
    </ul>
  )
}