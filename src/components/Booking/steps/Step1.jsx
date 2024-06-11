import { BuyCard } from "components/Booking/BuyCard"

export const Step1 = ({
  setStep,
  cart,
  editQuantity,
  removeFromCart,
  cloneBookingCart,
}) =>
{
  const handleMoveToStep2 = () =>
  {
    cloneBookingCart()
    setStep(2)
  }
  return (
    <>
      <BuyCard
        setStep={ setStep }
        cart={ cart }
        editQuantity={ editQuantity }
        removeFromCart={ removeFromCart }/>
      <button
        disabled={ cart.some(item => !item.quantity ) || !cart.length }
        onClick={ handleMoveToStep2 }
        className="btn btn-primary-contained w-80 my-5 disabled:opacity-50 disabled:cursor-not-allowed ">
        استمرار
      </button>
    </>
  )
}
