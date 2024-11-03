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
      <div className="mx-5" id="aboutAlpha">
          <h2 className="mt-8 mb-8 " style={{ fontSize: '22px' }}>عن الجهاز</h2>
          <h2 className="mt-8 mb-8 text-primary" style={{ fontSize: '20px' }}>جهاز فعال لمراقبة مستوى الماء في الخزان عبر تطبيق على الجوال. الجهاز مناسب لجميع أنواع الخزانات حتى عمق 5 أمتار</h2>

          {/* <div className=" relative my-5 Device-video">
            <YoutubeIframe link={banner?.link} title={banner?.title} />
          </div> */}
        </div>
      {banner && (
        <div className="mx-5" id="introduction">
          <h2 className="mt-8 mb-8 " style={{ fontSize: '22px' }}>فيديو تعريفي</h2>
          <div className=" relative my-5 Device-video">
            <YoutubeIframe link={banner?.link} title={banner?.title} />
          </div>
        </div>
      )}

      

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
      <DeviceFeatures features={features} title={title} />
      {/*}*/}
    </>
  );
};
