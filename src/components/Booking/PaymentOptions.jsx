import create_order from "apis/create_order"
import { CartQuickInfo } from "components/Booking/CartQuickInfo"
import { Coupon } from "components/Booking/steps/Coupon"
import { Loader } from "components/global/Loader"
import { useEffect, useState } from "react"

const responseStatus = {
  loading: <Loader/>,
  success: "✔",
  error: "✘",
}

const messages = {
  success: "تم انشاء الطلب بنجاح الرجاء التقدم الى الخطوة التالية ",
  error: "حدث خطأ أثناء إنشاء الطلب الرجاء المحاولة مرة أخرى",

}

const paymentOptions = [
  {
    title: "الدفع عند الاستلام",
    name: "cod",
  },
  {
    title: "الدفع عبر مدى / ابل باي",
    name: "creditCard",
  },

]
const installmentOptions = [
  {
    title: "الدفع أقساط ( على 12 دفعة )",
    name: "installment",
  },
]
const classes = {
  success: "text-green-500",
  error: "text-red-500",
}
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
  type,
  setOrderId,
}) =>
{
  const paymentMethods = type === "installment"
    ? installmentOptions
    : paymentOptions
  const [status, setStatus] = useState(false)
  const handleCreateOrder = async() =>
  {
    window.dataLayer.push({
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      email: orderData.email,
      phoneNumber: orderData.phoneNumber,
      city: orderData.city,
      source: orderData.source,
    })
    setStatus("loading")
    create_order({ formData: orderData }).then(response =>
      {
        setOrderId(response?.orderID)
        setCurrentStep(currentStep + 1)
        setStatus("success")
      },
    ).catch(error =>
    {

      setStatus("error")
    })
  }
  useEffect(() =>
  {
    setPaymentMethod(paymentMethods[ 0 ].name)
  }, []);
  return (
    <section className="bg-secondary rounded-lg shadow py-8 my-5 ">
      <h3
        className={ `flex gap-1 justify-center sm:justify-start px-5 ${ currentStep >=
        1 ? "text-primary" : "text-gray-500" }  items-center` }>
        <span
          className={ `flex justify-center items-center w-7 h-7 rounded-full border ${ currentStep >=
          1 ? "border-primary" : "border-gray-500" } ` }
        >2</span>
        خيارات الدفع
      </h3>
      { currentStep === 1 ?
        <>
          <div className="flex justify-center mt-5">
            <Coupon setCoupon={ setCoupon }
                    disabled={ paymentMethod === "installment" }/>
          </div>
          <CartQuickInfo cart={ cart } total={ total } coupon={ coupon }
                         type={ type }/>
          <div className={ `relative px-10 md:px-20 mt-16` }>

            <h3 className="text-start mb-2">
              خيارات الدفع
            </h3>
            <ul>
              {
                paymentMethods.map((item, index) => (
                  <li key={ index } className="flex gap-2 items-center">
                    <input
                      checked={ paymentMethod === item.name }
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
            <div className="flex items-center justify-center mt-5 gap-2">
            <button
              type="button"
              id="start-checkout"
              onClick={ handleCreateOrder }
              disabled={ paymentMethod === "" }
              className={ `btn btn-primary-contained w-28  ${ !paymentMethod &&
              "opacity-50 cursor-not-allowed" }` }
            >
              متابعة
            </button>
            <div
              className={ `text-2xl  ${ classes[ status ] }` }>
              { responseStatus[ status ] }
            </div>
            </div>
          </div>
        </>
        : <button
          className="btn btn-primary-contained w-28 mt-5"
          onClick={ () => setCurrentStep(1) }>
          تعديل
        </button>

      }
      <p className={ `text-sm mt-1 h-6 ${ classes[ status ] }` }>
        { messages[ status ] }
      </p>
    </section>
  )
}