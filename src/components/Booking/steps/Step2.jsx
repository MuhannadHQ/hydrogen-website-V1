import { PackagesList } from "components/Booking/PackagesList"
import { useEffect } from "react"

const calculateTotalPrice = (bookingCart) => bookingCart.reduce(
  (acc, item) => acc + item.price || 0, 0)
export const Step2 = ({
  setStep,
  bookingCart,
  setItemPlan,
setItemOption,
}) =>
{
  useEffect(() =>
  {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      {
        bookingCart.map((item, index) =>
          index === 0 ?
          <PackagesList
            key={ index }
           itemData={ item }
            setItemPlan={ setItemPlan }
            index={ index }
            setItemOption={ setItemOption }
          /> : null
        )
      }

      {/*<p className="text-primary">*/}
      {/*  خدمة التركيب متاحة داخل مدينة الرياض ومكة المكرمة وجدة والمنطقة الشرقية*/}
      {/*</p>*/}
      {/*<div className="">*/}
      {/*  <table className="table-auto w-64 my-5  text-start">*/}
      {/*    <tbody>*/}
      {/*    <tr>*/}
      {/*      <th className="text-start">الشحن :</th>*/}
      {/*      <td>*/}
      {/*        مجانا*/}
      {/*      </td>*/}
      {/*    </tr>*/}
      {/*    <tr>*/}
      {/*      <th className="text-start">إجمالي السعر:</th>*/}
      {/*      <td>*/}
      {/*        { calculateTotalPrice(bookingCart) } ر.س*/}
      {/*      </td>*/}
      {/*    </tr>*/}
      {/*    </tbody>*/}
      {/*  </table>*/}

      {/*</div>*/}
      <div className="my-5 flex gap-10 justify-center">
        <button
          onClick={ () => setStep(0) }
          className="btn btn-secondary">
          الرجوع
        </button>
        {console.log(bookingCart)}
        <button
          disabled={ bookingCart.length === 0 || ( bookingCart[0].id === "withoutSIM" && !bookingCart[0].option) }
          onClick={ () => setStep(2) }
          className={`btn btn-primary-contained w-60 ${ bookingCart.length === 0 || ( bookingCart[0].id === "withoutSIM" && !bookingCart[0].option) && "opacity-50 cursor-not-allowed" }`}>
          استمرار
        </button>
      </div>

    </>
  )
}