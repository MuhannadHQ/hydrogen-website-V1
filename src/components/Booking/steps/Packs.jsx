'use client'

import { useEffect, useState } from "react"

export const Packs = ({ bookingCart }) => {

    const [selectedPack, setSelectedPack] = useState({ plan: "oneYear", price: 389 });
    const [defaultPrice] = useState(bookingCart[0].price)

    useEffect(() => {
        bookingCart[0].plan = selectedPack.plan;
        bookingCart[0].price = defaultPrice + selectedPack.price
    }, [selectedPack])


    return (
        <div>
            <h1 className="text-primary text-center">الباقات</h1>
            <div className=" flex justify-center flex-row gap-3 flex-wrap mt-14 mb-6">

                {/* Pack 1 */}
                <div className="relative mt-5" key={0}>
                    <input onChange={(e) => setSelectedPack({ plan: e.target.value, price: 700 })} value="threeYears" className="peer hidden" id={`radio_0`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_0`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">1299 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">جهاز مفتوح بدون اشتراك + لوحة تحكم للأعمال</div>
                        </div>

                        <span className="absolute bg-primary py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">الباقة المميزة</span>
                    </label>
                </div>

                {/* Pack 2 */}
                <div className="relative mt-5" key={1}>
                    <input defaultChecked onChange={(e) => { setSelectedPack({ plan: e.target.value, price: 200 }); }} value="oneYear" className="peer hidden" id={`radio_1`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_1`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">799 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">جهاز مفتوح بدون اشتراك</div>
                        </div>

                        <span className="absolute bg-primary py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">الأكثر مبيعًا</span>
                    </label>
                </div>

                {/* Pack 3 */}
                <div className="relative mt-5" key={2}>
                    <input onChange={(e) => setSelectedPack({ plan: e.target.value, price: 0 })} value="freeTrial" className="peer hidden" id={`radio_2`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_2`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">599 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">جهاز + اشتراك شهري 49 ريال/شهر</div>
                        </div>

                        <span className="absolute bg-gray-500 py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">اشتراك شهري</span>
                    </label>
                </div>

            </div>
        </div>
    )
}