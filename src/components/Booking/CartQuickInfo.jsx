

export const CartQuickInfo = ({cart, total, coupon}) =>
{
  return (
    <div className="px-10 md:px-20">
      <div className="text-start w-full h-full">
        <div className="">
          <h3>ملخص الطلب</h3>
          <table className="table-auto w-full my-5 border-y">
            <thead>
            <tr className="border-t h-10">
              <th className="text-start">اسم المنتج</th>
              <th className="text-start">العدد</th>
              <th className="text-start">السعر</th>
            </tr>
            </thead>
            <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="h-10 text-primary">
                <td >
                  {item.title}
                </td>
                <td >
                  {item.quantity}
                </td>
                <td >
                  {item.price} ر.س
                </td>
              </tr>
            ))}
            {
              coupon?.code && (  <tr className="h-10 text-primary">
                <td>الخصم</td>
                <td></td>
                <td>
                  {coupon?.discount} ر.س
                </td>
              </tr>)
            }
            </tbody>
          </table>
          <div>
           <span className="w-24 inline-block">  إجمالي السعر: </span>
            <span className="text-primary  ">
              {total - (coupon?.discount || 0)} ر.س
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}