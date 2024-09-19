export const CartQuickInfo = ({ cart, total, coupon, type }) => {
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
                <th className="text-start">سعر الجهاز</th>
                {/*<th className="text-start">*/}
                {/*  سعر الباقة*/}
                {/*</th>*/}
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="h-10 text-primary">
                  <td>{item.name}</td>
                  <td>{item.quantity + item.devicePrice || 0}</td>
                  {/*<td>*/}
                  {/*  { item.devicePrice } ر.س*/}
                  {/*</td>*/}
                  <td>{item.packagePriceDescription}</td>
                </tr>
              ))}
              {coupon?.code && (
                <tr className="h-10 text-primary">
                  <td>الخصم</td>
                  <td></td>
                  <td>{coupon?.discount} ر.س</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            <span className="w-24 inline-block"> إجمالي السعر: </span>
            <span className="text-primary  ">
              {type === "installment" ? total : total - (coupon?.discount || 0)}
              ر.س
            </span>
          </div>
          {coupon?.code && coupon?.code == "wtu24" && (
            <div>
              <span className=" text-green-500">
                شحن واشتراك مجاني لمدة 3 أشهر
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
