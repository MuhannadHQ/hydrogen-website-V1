import { Steps } from "components/Booking/Steps";
import { Step1 } from "components/Booking/steps/Step1";
import { Step4 } from "components/Booking/steps/Step4";
import { Step3 } from "components/Booking/steps/Step3";
import Head from "next/head";
import { useState } from "react";
import useCart from "utils/hooks/cartController";
import Script from "next/script";

export const Cart = () => {
  const [step, setStep] = useState(0);
  const {
    cart,
    bookingCart,
    coupon,
    addToCart,
    removeFromCart,
    editQuantity,
    setItemOption,
    cloneBookingCart,
    setItemPlan,
    setCoupon,
  } = useCart();

  const steps = [
    <Step1
      key={0}
      cloneBookingCart={cloneBookingCart}
      setStep={setStep}
      cart={cart}
      editQuantity={editQuantity}
      removeFromCart={removeFromCart}
    />,
    <Step4
      key={1}
      cloneBookingCart={cloneBookingCart}
      setStep={setStep}
      cart={cart}
      editQuantity={editQuantity}
      removeFromCart={removeFromCart}
    />,
    <Step3
      key={2}
      cart={cart}
      coupon={coupon}
      setCoupon={setCoupon}
      bookingCart={bookingCart}
    />,
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.moyasar.com/mpf/1.11.0/moyasar.css"
      />
      <Script src="https://cdn.moyasar.com/mpf/1.11.0/moyasar.js"></Script>
      <section className="general-padding my-10">
        {/*<Steps step={ step }/>*/}
        {steps[step]}
      </section>
    </>
  );
};
