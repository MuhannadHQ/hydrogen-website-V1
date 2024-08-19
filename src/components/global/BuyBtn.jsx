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
    <button
      id="add-to-cart"
      onClick={() => {
        addToCart(device);
        amplitude.logEvent("Add to cart", device);
        router.push("/cart");
      }}
      className={`btn ${type} relative add-to-cart `}
    >
      {/*<CartPopup open={open} setOpen={setOpen}/>*/}
      اطلب الآن
    </button>
  );
};
