import create_payment from "apis/create_payment";
import { Loader } from "components/global/Loader";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const responseStatus = {
  loading: <Loader />,
  success: "✔",
  error: "✘",
};

const messages = {
  success: "",
  error: "حدث خطأ أثناء إنشاء الطلب الرجاء المحاولة مرة أخرى",
};

const classes = {
  success: "text-green-500",
  error: "text-red-500",
};

const cities = {
  ryiadh: "الرياض",
  jeddah: "جدة",
  mecca: "مكة المكرمة",
  madina: "المدينة المنورة",
  taif: "الطائف",
  yanbu: "ينبع",
  makkah: "مكة",
  taif: "الطائف",
  dammam: "الدمام",
  khobar: "الخبر",
  dhahran: "الظهران",
  jubail: "الجبيل",
  hassa: "الأحساء",
  qatif: "القطيف",
  buraydah: "بريدة",
  unaizah: "عنيزة",
  abha: "أبها",
  jazan: "جازان",
  tabuk: "تبوك",
};

const howDidYouKnow = {
  facebook: "فيسبوك",
  instagram: "انستقرام",
  twitter: "تويتر",
  google: "جوجل",
  friendOrRelative: "صديق أو قريب",
  snapchat: "سناب شات",
  tiktok: "تيك توك",
  whatsapp: "واتساب",
  paperPublications: "منشورات ورقية",
  youTube:"يوتيوب",
  other: "غير ذلك",
};
export const UserInfoForm = ({
  setUserInfo,
  phone,
  currentStep,
  setCurrentStep,
  disablePayment,
  qty,
  userInfo,
  setOrderId,
}) => {
  const [status, setStatus] = useState(false);
  const setPhone = (phoneNumber) => {
    setUserInfo((prev) => ({
      ...prev,
      phoneNumber,
    }));
  };
  const handleUserInfoChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSaveUserInfo = () => {
    setStatus("loading");
    create_payment({
      formData: {
        ...userInfo,
        phoneNumber: userInfo?.phoneNumber?.replace("966", ""),
        qty,
      },
    })
      .then((response) => {
        setOrderId(response?.orderID);
        setCurrentStep(currentStep + 1);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
    window.dataLayer.push({
      ...userInfo,
    });
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="bg-secondary rounded-lg shadow py-10 my-5 ">
      <h3 className="text-primary flex gap-1 justify-center sm:justify-start px-5  items-center ">
        <span className=" justify-center w-7 h-7 rounded-full border border-primary flex items-center">
          1
        </span>
        المعلومات الشخصية
      </h3>
      {currentStep < 1 ? (
        <form action="" className="userForm mt-8">
          <div>
            <label htmlFor="firstName" id="firstName">
              الاسم الأول
            </label>
            <input
              value={userInfo.firstName}
              type="text"
              name="firstName"
              onChange={handleUserInfoChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" id="lastName">
              الاسم الأخير
            </label>
            <input
              value={userInfo.lastName}
              type="text"
              name="lastName"
              onChange={handleUserInfoChange}
            />
          </div>
          <div>
            <label htmlFor="email" id="email">
              البريد الإلكتروني
            </label>
            <input
              value={userInfo.email}
              type="email"
              name="email"
              onChange={handleUserInfoChange}
            />
          </div>
          <div>
            <label htmlFor="phone">رقم الجوال</label>
            <div className="w-full relative" dir="ltr">
              <PhoneInput
                required
                value={phone}
                inputProps={{
                  style:
                    phone?.length < 12 && phone?.length !== 0
                      ? {
                          border: "1px solid #f00",
                          outline: "none",
                          boxShadow: "none",
                        }
                      : {},
                  required: true,
                  minLength: 9,
                  maxLength: 16,
                }}
                country={"sa"}
                specialLabel={""}
                masks={{
                  sa: ".. ... ....",
                }}
                disableCountryCode={false}
                countryCodeEditable={false}
                enableSearch={true}
                onChange={(phone) => {
                  setPhone(phone);
                }}
              />
              <div className="absolute -bottom-5 right-0 ">
                <p className="text-red-500 text-start text-sm">
                  {phone?.length < 12 &&
                    phone?.length !== 0 &&
                    "رقم الجوال غير صحيح"}
                </p>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="city" id="city">
              المدينة
            </label>
            <select
              value={userInfo.city}
              defaultValue={""}
              name="city"
              onChange={handleUserInfoChange}
            >
              <option value="" disabled hidden></option>
              {Object.keys(cities).map((city, index) => (
                <option key={index} value={city}>
                  {cities[city]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="source" id="source">
              كيف عرفت عن الجهاز؟
            </label>

            <select
              value={userInfo.source}
              defaultValue={""}
              name="source"
              onChange={handleUserInfoChange}
            >
              <option value="" disabled hidden></option>
              {Object.keys(howDidYouKnow).map((item, index) => (
                <option key={index} value={item}>
                  {howDidYouKnow[item]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center mt-5 gap-2">
            <button
              type="button"
              onClick={() => handleSaveUserInfo()}
              disabled={disablePayment}
              className={`btn btn-primary-contained w-28 mt-5 ${
                disablePayment && "opacity-50 cursor-not-allowed"
              }`}
            >
              متابعة
            </button>
            <div className={`text-2xl  ${classes[status]}`}>
              {responseStatus[status]}
            </div>
          </div>
        </form>
      ) : (
        <button
          className="btn btn-primary-contained w-28 mt-5"
          onClick={() => setCurrentStep(0)}
        >
          تعديل
        </button>
      )}
      <p className={`text-sm mt-1 h-6 ${classes[status]}`}>
        {messages[status]}
      </p>
    </div>
  );
};
