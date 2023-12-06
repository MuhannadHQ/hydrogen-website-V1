import { CartQuickInfo } from "components/Booking/CartQuickInfo"
import { Coupon } from "components/Booking/steps/Coupon"

const paymentOptions = [
  {
    title: "الدفع عند الاستلام",
    name: "cod",
  },
  {
    title: "الدفع عبر مدى / ابل باي",
    name: "creditCard",
  },
  {
    title: "الدفع أقساط ( على 3 دفعات )",
    name: "installment",
  },
]
export const PaymentOptions = ({
  cart,
  total,
  coupon,
  setPaymentMethod,
  paymentMethod,
 setCoupon,
  orderData,
  setCurrentStep,
  currentStep,
}) =>
{
  return (
    <section className="bg-secondary rounded-lg shadow py-8 my-5 ">
      <h3
        className={`flex gap-1 justify-center sm:justify-start px-5 ${currentStep >= 1 ? "text-primary" : "text-gray-500"}  items-center`}>
        <span
          className={`flex justify-center items-center w-7 h-7 rounded-full border ${currentStep >= 1 ? "border-primary" : "border-gray-500"} `}
        >2</span>
        خيارات الدفع
      </h3>
      { currentStep ===1 ?
        <>
          <div className="flex justify-center mt-5">
            <Coupon setCoupon={ setCoupon }/>
          </div>
          <CartQuickInfo cart={ cart } total={ total } coupon={ coupon }/>
      <div className={ `relative px-10 md:px-20 mt-16` }>

        <h3 className="text-start mb-2">
          خيارات الدفع
        </h3>
        <ul>
          {
            paymentOptions.map((item, index) => (
              <li key={ index } className="flex gap-2 items-center">
                <input
                  onChange={ () =>
                  {

                    setPaymentMethod(item.name)
                  } }
                  type="radio" name={ "payment" } id={ item.name }/>
                <label
                  className="text-gray-700"
                  htmlFor={ item.name }>{ item.title }</label>
              </li>
            ))
          }
        </ul>
        <button
              type="button"
              id="start-checkout"
          onClick={ () => {
            window.dataLayer.push({
              firstName: orderData.firstName,
              lastName: orderData.lastName,
              email: orderData.email,
              phoneNumber: orderData.phoneNumber,
              city: orderData.city,
              source: orderData.source,
            })

            setCurrentStep(currentStep + 1) }}
          disabled={ paymentMethod === ""}
          className={ `btn btn-primary-contained w-28 mt-5 ${ !paymentMethod &&
          "opacity-50 cursor-not-allowed" }` }
        >
          متابعة

        </button>

      </div>
        </>
        : <button className="btn btn-primary-contained w-28 mt-5"
                  onClick={ () => setCurrentStep(1) }>
          تعديل
        </button>

      }
    </section>
  )
}