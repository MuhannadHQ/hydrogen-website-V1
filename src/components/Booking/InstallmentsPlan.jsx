import { Arrow } from "assets/icons/Arrow"
import MoyasarForm from "components/Booking/MoyasserForm"
import Accordion from "components/global/Accordion"

export const InstallmentsPlan = ({ total, callbackUrl }) =>
{
  const amount = total
  const installmentAmount = Math.round(amount / 24)
  const now = new Date()
  const getInstallmentDate = (month) => new Date(now.getFullYear(),
    now.getMonth() + month, now.getDate())

  return (
    <div>

      <div className="flex flex-col justify-start  px-3 items-center md:px-10 mt-5 md:items-start">

        <div>
          <div
            className="flex flex-wrap gap-4 max-w-5xl justify-center ">
            <div
              className={ `flex gap-2 flex-col  items-center justify-center rounded-md shadow w-48 p-2 bg-primary text-white` }>
              <div>
                يبدأ أول دفعة في
              </div>
              <div>
                { getInstallmentDate(0).toLocaleDateString() }
              </div>
            </div>
            <div
              className={ `flex gap-2 flex-col items-center justify-center rounded-md shadow w-48 p-2 bg-primary text-white` }>
              <div>
                تنتهي الدفعة الأخيرة في
              </div>
              <div>
                { getInstallmentDate(11).toLocaleDateString() }
              </div>
            </div>
            {/*{*/ }
            {/*  new Array(12).fill(0).map((item, index) =>*/ }
            {/*    <div*/ }
            {/*      key={ index }*/ }
            {/*      className={`flex gap-2  items-center justify-center rounded-md shadow w-48 p-2 ${index === 0 ? "bg-primary text-white" : "bg-white"}`}>*/ }
            {/*      <div>*/ }
            {/*        { getInstallmentDate(index ).toLocaleDateString() }*/ }
            {/*      </div>*/ }
            {/*      <div >*/ }
            {/*        { installmentAmount } ر.س*/ }
            {/*      </div>*/ }
            {/*    </div>,*/ }
            {/*  ) }*/ }
          </div>
        </div>

<div className="md:px-7">
  <MoyasarForm callbackUrl={ callbackUrl } amount={ installmentAmount }/>

</div>
      </div>
      <div className="mx-3">
        <Accordion
          line={ true}
          bg={ "bg-transparent" }
          title={ " خطة الأقساط" }
          content={
            <div className="flex flex-wrap gap-4 max-w-5xl justify-center ">
              {
                new Array(12).fill(0).map((item, index) =>
                  <div
                    key={ index }
                    className={ `flex gap-2  items-center justify-center rounded-md shadow w-48 p-2 ${ index ===
                    0 ? "bg-primary text-white" : "bg-white" }` }>
                    <div>
                      { getInstallmentDate(index).toLocaleDateString() }
                    </div>
                    <div>
                      { installmentAmount } ر.س
                    </div>
                  </div>,
                ) }
            </div>
          }
        />
      </div>
    </div>
  )
}