'use client'
import Image from "next/image";
import icon1 from "assets/images/pre-order/1.png";
import icon2 from "assets/images/pre-order/2.png";
import icon3 from "assets/images/pre-order/3.png";
import icon4 from "assets/images/pre-order/4.png";
import image5 from "assets/images/pre-order/5.png";
import axios from "axios";
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    function submit() {
        const data = { name, phone, city }
        clearInputs();

        axios.post("https://hydrojeenapp.herokuapp.com/api/v2/product-orders/pre-order", data).then(() => {

        }).catch(console.error)
    }

    function clearInputs() {
        const inputElements = document.getElementsByTagName('input');

        for (let i = 0; i < inputElements.length; i++) {
            if (inputElements[i].type == 'text' || inputElements[i].type == 'number') {
                inputElements[i].value = '';
            }
        }
    }


    return (
        <div className="bg-[#eee]/50 pt-10">
            <div className="max-w-screen-md m-auto">

                <div className="sm:mr-10 mr-7">
                    <h1 className="text-right text-primary sm:text-xl text-lg w-fit font-semibold">قفل باب خارجي ذكي
                        <hr className="w-full h-0.5 bg-primary border " />
                    </h1>
                </div>

                <div className="flex flex-row mt-4">
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="flex flex-col sm:gap-4 gap-2">
                            <div className="flex justify-start items-center">
                                <Image className="lg:w-10" width={30} src={icon1} />
                                <div className="text-right">
                                    <h2 className="sm:text-lg text-[11px] font-semibold">فتح القفل بدون لمس</h2>
                                    <p className="sm:text-sm text-[9px]">دخول المنزل عند القرب من الباب والهاتف في جيبك دون لمس القفل</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <Image className="lg:w-10" width={30} src={icon2} />
                                <div className="text-right">
                                    <h2 className="sm:text-lg text-[11px] font-semibold">التحكم عن بعد</h2>
                                    <p className="sm:text-sm text-[9px]">فتح الباب عن طريق التطبيق الجوال من أي مكان.</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <Image className="lg:w-10" width={30} src={icon3} />
                                <div className="text-right">
                                    <h2 className="sm:text-lg text-[11px] font-semibold">دخول آمن لمندوب التوصيل</h2>
                                    <p className="sm:text-sm text-[9px]">مشاركة رابط مؤقت مع مندوب التوصيل لفتح الباب دون الحاجة للتواصل معه</p>
                                </div>
                            </div>
                            <div className="flex justify-start items-center">
                                <Image className="lg:w-10" width={30} src={icon4} />
                                <div className="text-right">
                                    <h2 className="sm:text-lg text-[11px] font-semibold">متابعة العمالة المنزلية</h2>
                                    <p className="sm:text-sm text-[9px]">مشاركة الدخول للمنزل مع العمالة المنزلية ومعرفة أوقات دخولهم وخروجهم</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Image className="w-full" src={image5} />
                        <p className="sm:text-lg text-xs font-semibold text-black">999 ريال شامل التركيب و الضريبة</p>
                    </div>
                </div>

                <div className="max-w-screen-sm rounded-lg w-[80%] m-auto sm:mt-16 mt-7 px-5 py-3 bg-white">
                    <div className="mb-5">
                        <h2 className="sm:text-lg text-xs text-center text-primary font-bold">سجل اهتمامك</h2>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col justify-center items-start">
                            <label className="sm:text-sm text-[9px] mr-2" htmlFor="name">الاسم</label>
                            <input value={name} onChange={e => setName(e.target.value)} className="bg-[#eee]/50 w-full rounded-xl sm:h-10 px-3 outline-none sm:text-sm text-[9px]" id="name" type="text" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <label className="sm:text-sm text-[9px] mr-2" htmlFor="phone">الجوال</label>
                            <input value={phone} onChange={e => setPhone(e.target.value)} className="bg-[#eee]/50 w-full rounded-xl sm:h-10 px-3 outline-none sm:text-sm text-[9px]" id="phone" type="number" />
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <label className="sm:text-sm text-[9px] mr-2" htmlFor="city">المدينة</label>
                            <input value={city} onChange={e => setCity(e.target.value)} className="bg-[#eee]/50 w-full rounded-xl sm:h-10 px-3 outline-none sm:text-sm text-[9px]" id="city" type="text" />
                        </div>
                    </div>
                    <button onClick={submit} className="m-auto bg-primary text-white rounded-2xl sm:px-10 px-5 py-1 mt-3 font-bold text-sm">تسجيل</button>
                </div>


            </div>
        </div>
    )
}