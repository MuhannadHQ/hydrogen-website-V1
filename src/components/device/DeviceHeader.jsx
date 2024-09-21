import { BuyBtn } from "components/global/BuyBtn";

export const DeviceHeader = ({ device }) => {
  const { price, name } = device || {};
  return (
    <div className="flex general-padding justify-between py-2 bg-black text-white items-center">
      <h3>{name}</h3>
      <br />
      <div className="flex gap-5 items-center">
        <div>
          {/* <span className="text-xs"> ابتداء من</span> */}
          {/* <br/> */}
          {price}
        </div>
        <BuyBtn device={device} type={"btn-secondary"} />
      </div>
    </div>
  );
};
