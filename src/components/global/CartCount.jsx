"use client";
import { useEffect, useState } from "react"
export const CartCount = () =>
{
  const [count, setCount] = useState(0)
  const handleStorage = () =>
  {
    setCount(window.localStorage.getItem("count") || 0)
  }
  useEffect(() =>
  {


    handleStorage()
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return ( parseInt(count) <= 0 ) ? null : (
    <>
      <div
        className="absolute top-0.5 -left-4 sm:-left-2 ml-6 flex items-center justify-center text-primary text-md w-full h-full mt-0.5">
              <span>
                { parseInt(count) }
              </span>
      </div>
    </>
  )
}
