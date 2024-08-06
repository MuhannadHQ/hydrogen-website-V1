"use client";
import create_order from "apis/create_order";
import create_payment from "apis/create_payment";
import { Loader } from "components/global/Loader";
import LzString from "lz-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import amplitude from "utils/amplitude";

function Payment() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function checkCompeletion() {
      let redirect = "";
      const orderDetails = searchParams.get("orderDetails");
      const id = searchParams.get("id");
      const status = searchParams.get("status");
      const message = searchParams.get("message");

      if (status === "paid") {
        let formData = LzString.decompressFromEncodedURIComponent(orderDetails);

        formData = JSON.parse(formData);
        if (id) formData.paymentID = id;
        formData.paymentStatus = status;
        formData.paymentMessage = message;
        formData.installationCompany = "ODA";

        await create_order({ formData })
          .then((response) => {
            redirect = `/order/success?order_id=${response?.orderID}&package_id=${formData?.packageID}`;

            amplitude.logEvent("Order placed", { orderID: response?.orderID });
          })
          .catch((error) => {
            redirect = `/order/failed?message=$خطأ لم نتمكن من إتمام الطلب`;
            amplitude.logEvent("Order failed", error);
          });
      }
      if (status === "failed") {
        redirect = `/order/failed?message=خطأ أثناء عملية الدفع لم نتمكن من إتمام الطلب`;
        amplitude.logEvent("Order failed", { status: "failed" });
      }
      router.push(redirect);
    }

    checkCompeletion();
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-2">
      <Loader />
      <div>جاري إنشاء الطلب</div>
    </div>
  );
}

export default Payment;
