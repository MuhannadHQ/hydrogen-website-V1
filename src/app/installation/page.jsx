"use client";

import { devices } from "apis/data/devicesData";
import { DeviceGuildeVideo } from "components/device/DeviceGuildeVideo";

const page = () => {
  return (
    <>
      <DeviceGuildeVideo guideVideos={devices.alpha.guideVideos} />
    </>
  );
};

export default page;
