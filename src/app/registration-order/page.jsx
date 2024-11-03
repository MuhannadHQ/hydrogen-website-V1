'use client'
import Form from "./form";
import { setCallbackUrl } from "utils/helpers/helpers";
import { useSearchParams } from "next/navigation";
import LzString from "lz-string";

export default function Page() {

    const searchParams = useSearchParams();
    const orderId = searchParams.get("order_id");
    const orderDetails = searchParams.get("orderDetails");
    let formData = LzString.decompressFromEncodedURIComponent(orderDetails);
    formData = JSON.parse(formData);
    formData.paymentMethod = "creditcard"

    const callbackUrl = setCallbackUrl(formData, orderId);


    return (
        <>
            <Form callbackUrl={callbackUrl} amount={299} />
        </>
    )
}

