import { BuyCard } from "components/Booking/BuyCard"
import { useEffect, useState } from "react"
import { getLocalStorageItem } from "utils/helpers/localstorage"
import {useRouter} from "next/navigation"
import Transition from "react-transition-group/Transition"

export const CartPopup = ({ open, setOpen }) =>
{
  const router = useRouter()
  const [cart,setCart]=useState([])
  useEffect(() =>
  {
    setCart(getLocalStorageItem("cart") || [])
  }, []);
  return (
    <Transition
      in={ open }
      timeout={ 300 }
      mountOnEnter
      unmountOnExit
    >
      { (state) => (
        <>
    <div
      className="fixed w-screen max-h-500 top-0 left-0 flex flex-col items-center px-4 pt-2 z-50">
      <div
        className={`w-full h-full max-h-500 overflow-y-auto border rounded shadow-lg bg-white z-50 general-padding relative py-10
          ${ state === 'entered' ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0" }  transition-all duration-300 ease-in-out`}>

        <div className="absolute top-0 right-0 cursor-pointer bg-red-500 text-white w-8 h-8 flex justify-center items-center m-3"
             onClick={ () => setOpen(false) }>
          X
        </div>
        <BuyCard cart={ cart }/>
        <button
        onClick={()=>router.push("/cart")}
          className="sticky -bottom-14 btn btn-secondary">
          اكمل الطلب
        </button>
      </div>
    </div>
        </>
      ) }
    </Transition>
  )
}