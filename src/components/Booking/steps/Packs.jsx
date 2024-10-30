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
                    <input onChange={(e) => setSelectedPack({ plan: e.target.value, price: 769 })} value="threeYears" className="peer hidden" id={`radio_0`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_0`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">769 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">اشتراك لمدة 3 سنوات</div>
                        </div>

                        <span className="absolute bg-primary py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">الأفضل قيمة</span>
                    </label>
                </div>

                {/* Pack 2 */}
                <div className="relative mt-5" key={1}>
                    <input defaultChecked onChange={(e) => { setSelectedPack({ plan: e.target.value, price: 389 }); }} value="oneYear" className="peer hidden" id={`radio_1`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_1`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">389 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">اشتراك لمدة سنة</div>
                        </div>

                        <span className="absolute bg-primary py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">الأكثر مبيعًا</span>
                    </label>
                </div>

                {/* Pack 3 */}
                <div className="relative mt-5" key={2}>
                    <input onChange={(e) => setSelectedPack({ plan: e.target.value, price: 0 })} value="freeTrial" className="peer hidden" id={`radio_2`} type="radio" name="radio" />

                    <label className="relative flex cursor-pointer flex-col justify-between box-content rounded-2xl border border-primary p-4 peer-checked:bg-primary peer-checked:text-white min-w-[250px] min-h-[130px]" htmlFor={`radio_2`}>
                        <h1 dir="rtl" className="self-start text-xl font-normal mt-3">0 ريال</h1>
                        <div className="flex justify-between gap-4">
                            <div className="font-bold">تجربة لمدة أسبوعين</div>
                        </div>

                        <span className="absolute bg-gray-500 py-2 px-3  rounded-lg text-white -top-[20px] text-sm font-extrabold border border-white">تجربة مجانية</span>
                    </label>
                </div>

            </div>
        </div>
    )
}