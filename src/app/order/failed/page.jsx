"use client";
import { Failed } from "assets/icons/Failed"
import { useSearchParams } from "next/navigation"

const Page = () =>
{
  const searchParams = useSearchParams()
  const message = searchParams.get("message")
  return ( <div className="">
    <div className="my-5 general-padding flex flex-col items-center">
<Failed />
      { message && <h2 className="text-3xl ">{ message }</h2> }
    </div>

  </div> )
}

export default Page