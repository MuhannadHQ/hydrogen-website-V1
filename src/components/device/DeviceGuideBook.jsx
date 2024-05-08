import {
  TechnicalSpecifications
} from "components/device/TechnicalSpecifications"
import Image from "next/image"
export const DeviceGuideBook = ({ title, guideBook, file, technicalSpecifications }) =>
{
  return (
    <section className="general-padding my-10">
   
      {/* <TechnicalSpecifications
        technicalSpecifications={ technicalSpecifications }/> */}
      <div
        className="flex justify-center items-center gap-14 my-14 flex-col sm:flex-row">

          <div className="flex sm:flex-col justify-center gap-5">

            <p className="text-center">
               لتحميل دليل المواصفات الفنية اضغط
              <a
                href={ "assets/guide-book.pdf" }
                download={ "assets/guide-book.pdf" }
                className="text-primary ">
                 {" هنا "}
              </a>
            </p>
          </div>
      </div>

</section>
)
}
