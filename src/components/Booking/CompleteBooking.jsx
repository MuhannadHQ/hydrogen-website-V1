import { InstallmentsPlan } from "components/Booking/InstallmentsPlan"
import MoyasarForm from "components/Booking/MoyasserForm"
import { Loader } from "components/global/Loader"
import LzString from "lz-string"
import Link from "next/link"
import { useState } from "react"

const responseStatus = {
  loading: <Loader/>,
}
const setCallbackUrl = (orderData, orderID) =>
{
  const orderDataString = LzString.compressToEncodedURIComponent(
    JSON.stringify({
      ...orderData,
      orderID,
    }));
  const url = `${ window.location.origin }/order?orderDetails=${ orderDataString }`;
  return url;
}

export const CompleteBooking = ({
  paymentMethod,
  orderData,
  disablePayment,
  currentStep,
  orderID,
}) =>
{
  const [status, setStatus] = useState("")

  const callbackUrl = setCallbackUrl(orderData, orderID);
  return (
    <div className="bg-secondary rounded-lg shadow py-8 text-gray-500">
      <h3
        className={ `flex gap-1  justify-center sm:justify-start px-5  items-center ${ currentStep >=
        2 ? "text-primary" : "text-gray-500" }` }>
        <span
          className={ `flex justify-center items-center w-7 h-7 rounded-full border ${ currentStep >=
          2 ? "border-primary" : "border-gray-500" }` }>3</span>
        إتمام الشراء
      </h3>
      {
        currentStep === 2 &&
        // <div className="px-5">
        //   <p className="text-start text-red-500 mt-5">
        //     الرجاء ملئ البيانات الشخصية لإتمام الطلب
        //   </p>
        // </div>

        <>
          { paymentMethod === "creditCard" &&
            <MoyasarForm
              callbackUrl={ callbackUrl }
              amount={ orderData.orderTotal }/> }
          { paymentMethod === "cod" &&
            <div className="px-5 flex justify-center items-center gap-4 mt-5">
              <Link href={ `${ callbackUrl }&&status=paid` }>
                <button
                  id="purchase"
                  onClick={ () => setStatus("loading") }
                  className="btn btn-primary w-64 ">
                  إتمام الطلب
                </button>
              </Link>
              <div className={ `text-2xl  top-0 -left-8 pt-1 ` }>
                { responseStatus[ status ] }
              </div>
            </div>
          }
          { paymentMethod === "installment" &&
            <InstallmentsPlan callbackUrl={ callbackUrl }
                              total={ orderData.orderTotal }/>
          }
        </>
      }
    </div>
  )
}