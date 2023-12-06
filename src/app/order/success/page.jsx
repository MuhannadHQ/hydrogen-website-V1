"use client";
import { Success } from "assets/icons/Success"
import { SocialMedia } from "components/global/SocialMedia"
import { useSearchParams } from "next/navigation"

const Page = () =>
{
  const searchParams = useSearchParams()
  const order_id = searchParams.get("order_id")


  return (<main className="">
    <div className="my-5 general-padding">

   <div className="flex items-center flex-col mb-10">
     <Success />
     <h2 className="text-xl">
       تم إتمام الطلب بنجاح
     </h2>
      <p className="text-xl my-3">
        رقم الطلب
        <br/>
        <span className="text-2xl text-primary">
        {order_id }
        </span>
      </p>

   </div>

<p className="text-xl my-5 text-black leading-relaxed ">
   يمكنك تحميل التطبيق من المتجر من خلال الروابط التالية
</p>
    <SocialMedia onlyApps={true} onlySocial={true} />
  </div>
  </main>)
}

export default Page;