'use client'
import Form from "./form";
import { setCallbackUrl } from "utils/helpers/helpers";
import { useSearchParams } from "next/navigation";

export default function Page() {

    const searchParams = useSearchParams();
    const orderId = searchParams.get("order_id");
    const callbackUrl = setCallbackUrl(JSON.parse(window.sessionStorage.getItem("orderData")), orderId);


    return (
        <>
            <Form callbackUrl={callbackUrl} amount={299} />
        </>
    )
}

