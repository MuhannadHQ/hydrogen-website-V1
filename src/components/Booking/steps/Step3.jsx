import { CompleteBooking } from "components/Booking/CompleteBooking"
import { PaymentOptions } from "components/Booking/PaymentOptions"
import { UserInfoForm } from "components/Booking/UserInfoForm"
import { useEffect, useState } from "react"
import { setCallbackUrl } from "utils/helpers/helpers"

const calculateTotalPrice = (bookingCart) =>bookingCart.reduce(
  (acc, item) => acc + (item.price + item.devicePrice )|| 0, 0)
const getType = (bookingCart = []) => ( bookingCart[ 0 ]?.type )
export const Step3 = ({ cart, bookingCart, coupon, setCoupon }) =>
{
  const [orderId, setOrderId] = useState("")
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
    packageID: bookingCart[ 0 ]?.id,
    orderTotal: total ,
    products: bookingCart.map(item => ( {
      package: item.plan,
      tankType: item.tankType || "none", 
      qty: 1,
      price: item.price,
      devicePrice: item.devicePrice,
      id: item.id,
    } )),
    utm: localStorage.getItem("UTM"),
  }
  const disablePayment = !userInfo.firstName || !userInfo.lastName ||
    !userInfo.email || userInfo?.phoneNumber?.length < 12 || !userInfo.city

  const callbackUrl = setCallbackUrl(orderData, orderId);

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
        qty={ bookingCart.length }
        userInfo={ userInfo }
        setOrderId={ setOrderId }
      />

      <PaymentOptions
        paymentMethod={ paymentMethod }
        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
        type={ getType(bookingCart) }
        // disablePayment={ disablePayment }
        setCoupon={ setCoupon }
        setPaymentMethod={ setPaymentMethod }
        cart={ cart.map(item => ( {
          title: item.data.title,
          quantity: item.quantity,
          devicePrice: bookingCart[ 0 ]?.devicePrice,
          // .filter(
          //   (cartItem) => cartItem._id === item.data._id).
          // reduce((acc, item) => acc + item.devicePrice, 0),
          price: bookingCart[ 0 ]?.price,
          // .filter(
          //   (cartItem) => cartItem._id === item.data._id).
          // reduce((acc, item) => acc + item.price, 0),
        } )) }
        disablePayment={ disablePayment }
        callbackUrl={ callbackUrl }
        coupon={ coupon }
        total={ total }
      />
      <CompleteBooking
        currentStep={ currentStep }
        setCurrentStep={ setCurrentStep }
        paymentMethod={ paymentMethod }
        orderID={ orderId }
        orderData={ orderData }
        total={ total }
        disablePayment={ disablePayment }/>
    </>
  )
}