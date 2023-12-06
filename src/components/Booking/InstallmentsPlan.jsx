import { Arrow } from "assets/icons/Arrow"
import MoyasarForm from "components/Booking/MoyasserForm"

export const InstallmentsPlan = ({ total, callbackUrl }) =>
{
  const amount = total || 1
  const installmentAmount = ( amount / 3 ).toFixed(2)
  const now = new Date()
  const getInstallmentDate = (month) => new Date(now.getFullYear(),
    now.getMonth() + month, now.getDate())

  return (
    <div className="flex justify-center md:flex-row flex-col px-10 md:px-20 mt-5 items-center">
      <div>
        <h3 className=" mb-8">
          خطة الأقساط
        </h3>

    <div className="flex flex-col gap-5 ">
      {
        new Array(3).fill(0).map((item, index) =>
          <div
            key={ index }
            className={`flex gap-2 items-center justify-center rounded-md shadow w-56 p-2 ${index === 0 ? "bg-primary text-white" : "bg-white"}`}>
            <div>
              { getInstallmentDate(index ).toLocaleDateString() }
            </div>
            <div >
              { installmentAmount } ر.س
            </div>
          </div>,
        ) }
    </div>
      </div>
      <MoyasarForm callbackUrl={callbackUrl} amount={ installmentAmount}/>

      {/*<div className="flex flex-wrap sm:flex-nowrap gap-5 mt-5">*/}
      {/*  {*/}
      {/*    new Array(3).fill(0).map((item, index) =>*/}
      {/*      ( <div*/}
      {/*          key={index}*/}
      {/*          className="flex justify-center items-center gap-2 ">*/}
      {/*        <Arrow/>*/}
      {/*       { getInstallmentDate(index ).toLocaleString("ar-EG", {*/}
      {/*         year: "numeric",*/}
      {/*         day: "numeric",*/}
      {/*         month: "long",*/}
      {/*       }) }*/}

      {/*     </div>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</div>*/}
    </div>
  )
}