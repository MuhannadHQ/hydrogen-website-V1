import PhoneInput from "react-phone-input-2"

const cities = {
  ryiadh: "الرياض",
  jeddah: "جدة",
  makkah: "مكة",
  dammam: "الدمام",
  khobar: "الخبر",
  dhahran: "الظهران",
  qatif: "القطيف",
}

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
  other: "غير ذلك",
}
export const UserInfoForm = ({
  setUserInfo, phone, currentStep, setCurrentStep, disablePayment,
}) =>
{
  const setPhone = (phoneNumber) =>
  {
    setUserInfo(prev => ( {
      ...prev,
      phoneNumber,
    } ))
  }
  const handleUserInfoChange = (e) =>
  {
    setUserInfo(prev => ( {
      ...prev,
      [ e.target.name ]: e.target.value,
    } ))
  }
  return (
    <div className="bg-secondary rounded-lg shadow py-10 my-5 ">
      <h3
        className="text-primary flex gap-1 justify-center sm:justify-start px-5  items-center ">
        <span
          className=" justify-center w-7 h-7 rounded-full border border-primary flex items-center">1</span>
        المعلومات الشخصية
      </h3>
      {
        currentStep < 1 ?
      <form action="" className="userForm mt-8">
        <div>
          <label
            htmlFor="firstName"
            id="firstName">
            الاسم الأول
          </label>
          <input type="text" name="firstName"
                 onChange={ handleUserInfoChange }/>
        </div>
        <div>
          <label htmlFor="lastName" id="lastName">
            الاسم الأخير
          </label>
          <input type="text" name="lastName" onChange={ handleUserInfoChange }/>
        </div>
        <div>
          <label htmlFor="email" id="email">
            البريد الإلكتروني
          </label>
          <input type="email" name="email" onChange={ handleUserInfoChange }/>
        </div>
        <div>
          <label htmlFor="phone">
            رقم الجوال
          </label>
          <div className="w-full relative" dir="ltr">
            <PhoneInput
              required

              inputProps={ {

                style: phone?.length < 12 && phone?.length !== 0 ?
                  {
                    border: "1px solid #f00",
                    outline: "none",
                    boxShadow: "none",
                  } : {},
                required: true,
                minLength: 9,
                maxLength: 16,

              } }
              country={ "sa" }
              specialLabel={ "" }
              masks={ {
                sa: ".. ... ....",
              } }
              disableCountryCode={ false }
              countryCodeEditable={ false }
              enableSearch={ true }
              onChange={ (phone) =>
              {
                setPhone(phone)
              } }
            />
            <div className="absolute -bottom-5 right-0 ">
              <p className="text-red-500 text-start text-sm">
                { phone?.length < 12 && phone?.length !== 0 &&
                  "رقم الجوال غير صحيح" }
              </p>
            </div>
          </div>

        </div>

        <div>
          <label htmlFor="city" id="city">
            المدينة
          </label
          >
          <select
            defaultValue={ "" }
            name="city"
            onChange={ handleUserInfoChange }>

            <option value="" disabled hidden></option>
            {
              Object.keys(cities).
              map((city, index) => ( <option
                key={ index }
                value={ city }>{ cities[ city ] }</option> ))
            }
          </select>
        </div>
        <div>
          <label htmlFor="source" id="source">
            كيف عرفت عن الجهاز؟
          </label
          >

          <select
            defaultValue={ "" }
            name="source"
            onChange={ handleUserInfoChange }>
            <option value="" disabled hidden></option>
            {
              Object.keys(howDidYouKnow).
              map((item, index) => (
                <option
                  key={ index }
                  value={ item }>{ howDidYouKnow[ item ] }</option> ))
            }
          </select>
        </div>
        <button
          type="button"
          onClick={ () => setCurrentStep(currentStep + 1) }
          disabled={ disablePayment }
          className={ `btn btn-primary-contained w-28 mt-5 ${ disablePayment &&
          "opacity-50 cursor-not-allowed" }` }
        >
          متابعة

        </button>
      </form>
        : <button className="btn btn-primary-contained w-28 mt-5"
        onClick={ () => setCurrentStep(0) }>
      تعديل
    </button>
      }
    </div>
  )
}