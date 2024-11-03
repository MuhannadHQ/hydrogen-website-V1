"use client"
import contactUs from "apis/contact_us"
import { Email } from "assets/icons/Email"
import { Location } from "assets/icons/Location"
import { Whattsapp } from "assets/icons/Whattsapp"
import { Loader } from "components/global/Loader"
import { useState } from "react"

const responseStatus = {
  loading: <Loader/>, success: "✔", error: "✘",
}

const messages = {
  success: "تم ارسال الطلب بنجاح", error: "حدث خطأ ما",
}

const classes = {
  success: "text-green-500", error: "text-red-500",
}
export const ContactUs = ({ onlyform }) =>
{

  const [formInfo, setFormInfo] = useState({})
  const [status, setStatus] = useState("")

  const handleFormInfoChange = (e) =>
  {
    setFormInfo(prev => ( {
      ...prev, [ e.target.name ]: e.target.value,
    } ))
  }

  const submitTheForm = (e) =>
  {
    e.preventDefault()
    setStatus("loading")
    contactUs(formInfo).then(() =>
    {
      setStatus("success")
      setFormInfo({})

    }).catch(() =>
    {
      setStatus("error")
    })

  }

  return ( <section className="general-padding ">
      <div className="my-5">
        <h2>
          تواصل معنا
        </h2>
        {/*<p>يسعدنا تواصلك معنا في حال وجود أي استفسار أو ملاحظة</p>*/ }
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row ">
        { !onlyform &&
          <div className="w-11/12 md:w-5/12 flex flex-col gap-20 mb-6">
            <ul className=" flex flex-col justify-center gap-10">
              <li className="flex items-center gap-3 ">
                <Whattsapp/>
                <span>0504281941</span>
              </li>
              <li className="flex items-center gap-3 ">
                <Email/>
                <span>info@hydrojeen.com</span></li>
              <li className="flex items-center gap-3 whitespace-nowrap">
                <Location/>
                <span>

            الكراج - الرياض، المملكة العربية السعودية
          </span></li>

            </ul>
            {/*<div className="w-fit">*/ }
            {/*  <h3 className="text-primary  mb-10">أو عن طريق وسائل التواصل الاجتماعي:</h3>*/ }
            {/*  <SocialMedia />*/ }
            {/*</div>*/ }

          </div> }

        <div className="w-full md:w-7/12 ">
          <form onSubmit={ (e) => submitTheForm(e) } className="contact-form">
            <input
              value={ formInfo.name || "" }
              placeholder="الاسم" type="text" name="name"
              onChange={ handleFormInfoChange }/>
            {/* <input placeholder="الاسم الأخير" type="text"/> */ }
            {/* <input placeholder="الايميل" type="text"/> */ }
            <input
              value={ formInfo.phoneNumber || "" }
              placeholder="رقم الجوال" type="text" name="phoneNumber"
              onChange={ handleFormInfoChange }/>
            {/*<input*/ }
            {/*  value={formInfo.type || ""}*/ }
            {/*  placeholder="نوع الاستفسار" type="text" name="type" onChange={handleFormInfoChange}/>*/ }
            <textarea
              value={ formInfo.message || "" }
              placeholder="الرسالة"
              name="message" id="" cols="30" rows="3"
              onChange={ handleFormInfoChange }></textarea>
            <div className="relative">
              <button
                className="rounded-lg py-2 px-5 btn-primary-contained w-full flex items-center gap-2 justify-center">
                <span>إرسال</span>

              </button>
              <div
                className={ `text-2xl absolute top-0 -left-8 pt-1 ${ classes[ status ] }` }>
                { responseStatus[ status ] }
              </div>
            </div>
            <p className={ `text-sm mt-1 h-6 ${ classes[ status ] }` }>
              { messages[ status ] }
            </p>
          </form>
        </div>
      </div>
    </section> )
}