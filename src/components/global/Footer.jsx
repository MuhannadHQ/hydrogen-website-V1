"use client";
import conversionView from "apis/conversion-view"
import { SocialMedia } from "components/global/SocialMedia"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'

export const Footer = () =>
{
  const searchParams = useSearchParams()

  const UTM = searchParams.get("utm")

  if (UTM)
  {
    localStorage.setItem("UTM", UTM)
    conversionView({ utm: UTM })
  }
  return (
    <footer className="bg-secondary pb-2 pt-10 px-3 h-56">
      <ul
        className="text-primary flex items-center justify-center gap-5 flex-wrap xs:flex-nowrap">
        {/* <li><Link href={"/lamda"}>جهاز لامدا</Link></li> */}
        <li><Link href={"/alpha"}>جهاز ألفا</Link></li>

        <li><Link href={"/questions"}>الأسئلة الشائعة</Link></li>
        <li><Link href={"/contactus"}>اتصل بنا</Link></li>
      </ul>
      <div className="mt-14 mb-6">
        <SocialMedia onlySocial={true}/>
      </div>

      <div>
        <p>هيدروجين 2023</p>
      </div>
    </footer>
  )
}
