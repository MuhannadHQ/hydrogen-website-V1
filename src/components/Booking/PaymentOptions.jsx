import { CartQuickInfo } from "components/Booking/CartQuickInfo";
import { Coupon } from "components/Booking/steps/Coupon";
import { Loader } from "components/global/Loader";
import Link from "next/link";
import { useEffect, useState } from "react";
import amplitude from "utils/amplitude";

const subscriptionPaymentOptions = [
  {
    title: "الدفع عند الاستلام",
    name: "cod",
  },
  {
    title: "الدفع عبر مدى / ابل باي",
    name: "creditCard",
  },
];
const paymentOptions = [
  {
    title: "الدفع عند الاستلام",
    name: "cod",
  },
  {
    title: "الدفع عبر مدى / ابل باي",
    name: "creditCard",
  },
  // {
  //   title: "الدفع على 3 دفعات",
  //   name: "installment",
  // },
  // {
  //   title: "الدفع على 3 دفعات",
  //   name: "installment",
  // }
];

const responseStatus = {
  loading: <Loader />,
};
export const PaymentOptions = ({
  cart,
  total,
  coupon,
  setPaymentMethod,
  paymentMethod,
  setCoupon,
  setCurrentStep,
  currentStep,
  callbackUrl,
  type,
  setChecked,
  checked,
  disablePayment,
}) => {
  const paymentMethods =
    type === "subscription" ? subscriptionPaymentOptions : paymentOptions;
  const [status, setStatus] = useState("");
  const handleCreateOrder = async () => {
    setCurrentStep(currentStep + 1);

    amplitude.logCheckoutStep(3, {
      paymentMethod: paymentMethod,
      total: total,
    });
  };
  useEffect(() => {
    setPaymentMethod(paymentMethods[0].name);
    console.log(cart);
  }, []);
  return (
    <section className="bg-secondary rounded-lg shadow py-8 my-5 ">
      <h3
        className={`flex gap-1 justify-center sm:justify-start px-5 ${
          currentStep >= 1 ? "text-primary" : "text-gray-500"
        }  items-center`}
      >
        <span
          className={`flex justify-center items-center w-7 h-7 rounded-full border ${
            currentStep >= 1 ? "border-primary" : "border-gray-500"
          } `}
        >
          2
        </span>
        خيارات الدفع
      </h3>
      {currentStep === 1 && (
        <>
          <div className="flex justify-center mt-5">
            <Coupon
              setCoupon={setCoupon}
              disabled={paymentMethod === "installment"}
            />
          </div>
          <CartQuickInfo
            cart={cart}
            total={total}
            coupon={coupon}
            type={type}
          />
          <div className={`relative px-10 md:px-20 mt-16`}>
            <h3 className="text-start mb-2">خيارات الدفع</h3>
            <ul>
              {paymentMethods.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <input
                    checked={paymentMethod === item.name}
                    onChange={() => {
                      setPaymentMethod(item.name);
                    }}
                    type="radio"
                    name={"payment"}
                    id={item.name}
                  />
                  <label className="text-gray-700" htmlFor={item.name}>
                    {item.title}
                  </label>
                </li>
              ))}
            </ul>
            {/* <Agreement setChecked={setChecked} checked={checked}/> */}
            {paymentMethod === "cod" ? (
              <>
                <div className="px-5 flex justify-center items-center gap-4 mt-2">
                  <Link href={`${callbackUrl}&&status=paid`}>
                    <button
                      id="purchase"
                      // disabled={ !checked }
                      onClick={() => setStatus("loading")}
                      className={`btn btn-primary w-64`}
                    >
                      إتمام الطلب
                    </button>
                  </Link>
                  <div className={`text-2xl  top-0 -left-8 pt-1 `}>
                    {responseStatus[status]}
                  </div>
                </div>
              </>
            ) : (
              <button
                type="button"
                id="start-checkout"
                onClick={handleCreateOrder}
                disabled={paymentMethod === ""}
                className={`btn btn-primary-contained w-28 mt-2 ${
                  !paymentMethod && "opacity-50 cursor-not-allowed"
                }`}
              >
                متابعة
              </button>
            )}
          </div>
        </>
      )}
      {currentStep === 2 && (
        <button
          className="btn btn-primary-contained w-28 mt-5"
          onClick={() => setCurrentStep(1)}
        >
          تعديل
        </button>
      )}
    </section>
  );
};
