"use client";

import { Device } from "components/device/Device";
import { devices } from "apis/data/devicesData";
import { Questions } from "components/Questions";
import { useEffect } from "react";
import Amplitude from "utils/amplitude";
export async function generateStaticParams() {
  return Object.keys(devices).map((device) => ({ params: { device } }));
}
const page = ({ params }) => {
  const device = params.device;
  useEffect(() => {
    if (device) {
      Amplitude.logEvent("Product Viewed", devices[device]);
    }
  }, [device]);

  return (
    <>
      <Device device={devices[device]} />
    </>
  );
};

export default page;
