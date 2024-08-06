"use client";

import { InstallmentsPlan } from "components/Booking/InstallmentsPlan";
import MoyasarForm from "components/Booking/MoyasserForm";
import { useEffect } from "react";
import amplitude from "utils/amplitude";
import { setCallbackUrl } from "utils/helpers/helpers";

export const CompleteBooking = ({
  paymentMethod,
  orderData,
  disablePayment,
  currentStep,
  orderID,
}) => {
  const callbackUrl = setCallbackUrl(orderData, orderID);

  return (
    <div className="bg-secondary rounded-lg shadow py-8 text-gray-500">
      <h3
        className={`flex gap-1  justify-center sm:justify-start px-5  items-center ${
          currentStep >= 2 ? "text-primary" : "text-gray-500"
        }`}
      >
        <span
          className={`flex justify-center items-center w-7 h-7 rounded-full border ${
            currentStep >= 2 ? "border-primary" : "border-gray-500"
          }`}
        >
          3
        </span>
        إتمام الشراء
      </h3>
      {currentStep === 2 && (
        <>
          {paymentMethod === "creditCard" && (
            <MoyasarForm
              callbackUrl={callbackUrl}
              amount={orderData.orderTotal}
            />
          )}
          {paymentMethod === "installment" && (
            <InstallmentsPlan
              callbackUrl={callbackUrl}
              total={orderData.orderTotal}
            />
          )}
        </>
      )}
    </div>
  );
};
