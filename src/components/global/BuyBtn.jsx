"use client";
import { BuyCard } from "components/Booking/BuyCard";
import { CartPopup } from "components/global/CartPopup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getLocalStorageItem,
  setLocalStorage,
} from "utils/helpers/localstorage";
import amplitude from "utils/amplitude";

const addToCart = (newItem) => {
  const cart = getLocalStorageItem("cart") || [];
  if (cart.find((item) => item.data._id === newItem._id)) return false;

  const newCart = [
    ...cart,
    {
      data: newItem,
      quantity: 1,
    },
  ];
  setLocalStorage(newCart);
  return true;
};

export const BuyBtn = ({ type, device }) => {
  // const [open, setOpen] = useState(false)
  //
  //
  // const handleClick = () => {
  // if (addToCart(device))
  // {
  //   setOpen(true)
  //   const timer = setTimeout(() => {
  //     setOpen(false)
  //   }, 5000);
  //   return () => clearTimeout(timer)
  // }
  //   else setOpen(false)
  // }
  const router = useRouter();

  return (
    // <button
    //   id="add-to-cart"
    //   onClick={() => {
    //     addToCart(device);
    //     amplitude.logEvent("Add to cart", device);
    //     router.push("/cart");
    //   }}
    //   className={`btn ${type} relative add-to-cart `}
    // >
    //   {/*<CartPopup open={open} setOpen={setOpen}/>*/}
    //   اطلب الآن
    // </button>

    <button
    id="add-to-cart"
    onClick={() => {
      // Log the event (optional - keep if you want analytics)
      amplitude.logEvent("Redirect to Naqa", device);
      
      // Redirect to Google
      window.open('https://naqialalamia.com/%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9-%D9%85%D8%B3%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-%D8%A7%D9%84%D8%AE%D8%B2%D8%A7%D9%86/p1226856637', '_blank');
    }}
    className={`btn ${type} relative add-to-cart `}
  >
    اطلب الآن
  </button>

  );
};
