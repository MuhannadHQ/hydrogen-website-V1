import Image from "next/image";
import icon1 from "assets/images/pre-order/1.png";
import icon2 from "assets/images/pre-order/2.png";
import icon3 from "assets/images/pre-order/3.png";
import icon4 from "assets/images/pre-order/4.png";
import image5 from "assets/images/pre-order/5.png";

export default function Page() {
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

                {/* <div>
                    <div>
                        <h2>سجل اهتمامك</h2>
                    </div>
                    <div>
                        <label htmlFor="">الاسم</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">الجوال</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">المدينة</label>
                        <input type="text" />
                    </div>
                </div> */}


            </div>
        </div>
    )
}