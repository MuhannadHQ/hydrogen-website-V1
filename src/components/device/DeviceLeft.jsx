import { BuyBtn } from "components/global/BuyBtn"
import { devices } from "apis/data/devicesData"

const DeviceLeft = () =>
{
  const devicesLeft = 200
  const leftLength = String(devicesLeft).length
  return (
    <div
      className="flex general-padding justify-between py-8 bg-black text-white items-center  border-b pb-5 border-white">
      <div className="flex flex-col items-center">
        <h3>
          عدد الأجهزة المتبقية للطلب
        </h3>
        <div dir="ltr" className="border-4 border-white w-fit overflow-y-hidden mt-2 px-1.5">
          {
            String(devicesLeft).split("").map((item, i) =>
              <span key={ i } className={`text-2xl font-bold p-0.5 border-r-4 pl-1 text-primary ${i + 1 === leftLength && "border-none"} "`}> { item } </span>
            )
          }
        </div>

      </div>
      <div className="flex gap-5 items-center">

        <BuyBtn  device={ devices["alpha"] } type={ "btn-primary-contained" }/>
      </div>
    </div>
  );
};

export default DeviceLeft;