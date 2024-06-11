import fetch_coupon from "apis/fetch_coupon"
import { Loader } from "components/global/Loader"
import { useState } from "react"

const responseStatus = {
  loading: <Loader/>,
  success: "✔",
  error: "✘",
}

const messages = {
  success: "تم تطبيق الرمز الترويجي بنجاح",
  error: "الرمز الترويجي غير صحيح",
}

const classes = {
  success: "text-green-500",
  error: "text-red-500",
}
export const Coupon = ({ setCoupon, disabled }) =>
{
  const [couponCode, setCouponCode] = useState("")
  const [status, setStatus] = useState("")

  const handleSetCouponCode = (e) => setCouponCode(e.target.value)
  const handleSetCoupon = () =>
  {
    setStatus("loading")

    fetch_coupon(couponCode).then((res) =>
      {
        if (res)
        {
          setCoupon(res)
          setStatus("success")
        }
      },
    ).catch((err) =>
    {
      console.log(err)
      setCoupon({})
      setStatus("error")
    })
  }
  return (
    <div>
      <div className="flex">
        <div className={`relative ${disabled && "opacity-50 cursor-not-allowed"}`}>
          <button
            disabled={ disabled }

            onClick={ handleSetCoupon }
            className="absolute top-3 left-4 text-primary cursor-pointer">
            استخدم
          </button>
          <input
            disabled={ disabled }
            className="border-2 border-primary w-56 px-2 rounded-xl py-3 pl-20 focus:outline-none focus:border-primary"
            placeholder=" الرمز الترويجي"
            onChange={ handleSetCouponCode }
            type="text"
            name="coupon"
            id="coupon"
          />
        </div>
        <div className={ `text-2xl p-2 inline-block ${ classes[ status ] }` }>
          { responseStatus[ status ] }
        </div>

      </div>
      <p className={ `text-sm mt-1 h-6 ${ classes[ status ] }` }>
        { messages[ status ] }
      </p>
    </div>
  )
}
