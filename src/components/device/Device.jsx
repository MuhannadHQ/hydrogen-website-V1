import { DeviceFeatures } from "components/device/DeviceFeatures"
import { DeviceGuideBook } from "components/device/DeviceGuideBook"
import { DeviceGuildeVideo } from "components/device/DeviceGuildeVideo"
import { DeviceHeader } from "components/device/DeviceHeader"
import { DeviceMain } from "components/device/DeviceMain"
import YoutubeIframe from "components/global/YoutubeIframe"
import DeviceBanner from "./DeviceBanner"

export const Device = ({ device }) =>
{
  const {
    title,
    features,
    guideBook,
    guideVideos,
    banner,
    guideBookFile,
  } = device || {}
  return (
    <>
      {/*<DeviceLeft />*/}
      <DeviceHeader device={ device }/>
      <DeviceMain moreLink={false} device={device} />
      {
        banner && (
       <DeviceBanner banner={banner} />
        )
        
      }
      

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
}
