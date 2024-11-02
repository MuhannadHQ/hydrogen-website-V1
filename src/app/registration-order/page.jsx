'use client'
import Script from "next/script";
import Form from "./form";
import { useState } from "react";
export default function Page() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.moyasar.com/mpf/1.11.0/moyasar.css"
            />
            <Script src="https://cdn.moyasar.com/mpf/1.11.0/moyasar.js" onLoad={() => setIsLoading(false)}></Script>
            {isLoading ? "" : <Form />}
        </>
    )
}

