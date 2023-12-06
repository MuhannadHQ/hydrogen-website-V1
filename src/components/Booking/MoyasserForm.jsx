import { useEffect } from "react";

function MoyasarForm ({ callbackUrl, amount })
{

  useEffect(() =>
  {
    Moyasar.init({
      element: ".mysr-form",
      amount: amount * 100,
      currency: "SAR",
      description: "Device Order #1",

      publishable_api_key: process.env.MOYASER_API_KEY,
      callback_url: callbackUrl,
      methods: [ "applepay", "creditcard" ],
      supported_networks:['mada'],
      apple_pay: {
        country: "SA",
        label: "Hydrogen",
        language: "ar",
        validate_merchant_url: "https://api.moyasar.com/v1/applepay/initiate",
      },
    });

  }, []);

  return <div
    lang={ "ar" }
    className="mysr-form  border shadow border-gray-500 rounded-2xl p-5 my-5 "></div>;
}

export default MoyasarForm;
