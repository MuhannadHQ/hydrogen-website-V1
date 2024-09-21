"use client";

import { useEffect } from "react";
import Amplitude from "utils/amplitude";
import CustomizeProduct from "components/customize_product/CustomizeProduct";

const Customize = ({ params }) => {
  const device = params.device;
  useEffect(() => {
    if (device) {
      Amplitude.logEvent("Customize Product", device);
    }
  }, [device]);

  return (
    <>
      <CustomizeProduct device={device} />
    </>
  );
};

export default Customize;
