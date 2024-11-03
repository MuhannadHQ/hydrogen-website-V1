"use client";
import { Success } from "assets/icons/Success";
import { SocialMedia } from "components/global/SocialMedia";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cities } from "apis/data/cities";


const Page = () => {
  const searchParams = useSearchParams();
  const order_id = searchParams.get("order_id");
  const package_id = searchParams.get("package_id");

  return (
    <main className="">
      <div className="my-5 general-padding">
        <div className="flex items-center flex-col mb-10">
          <Success />
          <h2 className="text-xl">تم إتمام الطلب بنجاح</h2>
          <p className="text-xl my-3">
            رقم الطلب
            <br />
            <span className="text-2xl text-primary">{order_id}</span>
          </p>
          <p className="text-xl my-3">
            {/*اسم الباقة*/}
            {/*<span className="text-2xl text-primary">*/}
            {/* {package_id }*/}
            {/* </span>*/}
          </p>

          {
            cities.includes(window.sessionStorage.getItem("city")) ?
              <Link href={`/registration-order?order_id=${order_id}&package_id=${package_id}`}>
                <button className="text-white bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">طلب خدمة تركيب</button>
              </Link> : ""
          }

        </div>

        <p className="text-xl my-5 text-black leading-relaxed ">
          يمكنك تحميل التطبيق من المتجر من خلال الروابط التالية
        </p>
        <SocialMedia onlyApps={true} onlySocial={true} />
      </div>
    </main>
  );
};

export default Page;
