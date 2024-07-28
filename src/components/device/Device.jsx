"use client";

import { DeviceFeatures } from "components/device/DeviceFeatures";
import { DeviceGuideBook } from "components/device/DeviceGuideBook";
import { DeviceGuildeVideo } from "components/device/DeviceGuildeVideo";
import { DeviceHeader } from "components/device/DeviceHeader";
import { DeviceMain } from "components/device/DeviceMain";
import YoutubeIframe from "components/global/YoutubeIframe";

export const Device = ({ device }) => {
  const { title, features, guideBook, guideVideos, banner, guideBookFile } =
    device || {};
  return (
    <>
      {/*<DeviceLeft />*/}
      <DeviceHeader device={device} />
      <DeviceMain moreLink={false} device={device} />
      {banner && (
        <div className="mx-5">
          <h2 className="mt-8 mb-8 ">فيديو تعريفي</h2>
          <div className=" relative my-5 Device-video">
            <YoutubeIframe link={banner?.link} title={banner?.title} />
          </div>
        </div>
      )}

      <DeviceFeatures features={features} title={title} />

      {guideVideos && (
        <DeviceGuildeVideo
          banner={banner}
          guideVideos={guideVideos}
          title={title}
        />
      )}
      {/*{*/}
      {guideBook && (
        <DeviceGuideBook
          title={title}
          guideBook={guideBook}
          technicalSpecifications={device.technicalSpecifications}
          file={guideBookFile}
        />
      )}
      {/*}*/}
    </>
  );
};
