import { CompleteBooking } from "components/Booking/CompleteBooking"
import { PaymentOptions } from "components/Booking/PaymentOptions"
import { UserInfoForm } from "components/Booking/UserInfoForm"
import { useEffect, useState } from "react"

const calculateTotalPrice = (bookingCart) => bookingCart.reduce(
  (acc, item) => acc + item.price || 0, 0)
export const Step3 = ({ cart, bookingCart, coupon, setCoupon }) =>
{
  const [userInfo, setUserInfo] = useState({})
  const [paymentMethod, setPaymentMethod] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const total = calculateTotalPrice(bookingCart)
  const orderData = {
    ...userInfo,
    phoneNumber: userInfo?.phoneNumber?.replace("966", ""),
    paymentMethod,
    promoCode: coupon?.code,
    discount: coupon?.discount,
    installationCompany: "",
    scSCi: "",
    orderTotal: total - ( coupon?.discount || 0 ),
    products: bookingCart.map(item => ( {
      package: item.plan,
      tankType: item.tankType || "none",
      qty: 1,
      price: item.price,
    } )),
    utm: localStorage.getItem('UTM'),
  }
  const disablePayment = !userInfo.firstName || !userInfo.lastName ||
    !userInfo.email || userInfo?.phoneNumber?.length < 12 || !userInfo.city
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <UserInfoForm
        setUserInfo={ setUserInfo }
        phone={ userInfo.phoneNumber }
        disablePayment={ disablePayment }

        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
      />
      <PaymentOptions
        paymentMethod={ paymentMethod }
        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
        // disablePayment={ disablePayment }
        setCoupon={ setCoupon }
        orderData={ orderData }
        setPaymentMethod={ setPaymentMethod }
        cart={ cart.map(item => ( {
          title: item.data.title,
          quantity: item.quantity,
          price: bookingCart.filter(
            (cartItem) => cartItem._id === item.data._id).
          reduce((acc, item) => acc + item.price, 0),
        } )) }

        coupon={ coupon }
        total={ total }
      />
      <CompleteBooking
        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
        paymentMethod={ paymentMethod }
        orderData={ orderData }
        disablePayment={ disablePayment }/>
    </>
  )
}