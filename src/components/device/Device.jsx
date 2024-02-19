import { DeviceFeatures } from "components/device/DeviceFeatures"
import { DeviceGuideBook } from "components/device/DeviceGuideBook"
import { DeviceGuildeVideo } from "components/device/DeviceGuildeVideo"
import { DeviceMain } from "components/device/DeviceMain"
import YoutubeIframe from "components/global/YoutubeIframe"

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
      {/*<DeviceLeft />*/ }
      {/*<DeviceHeader device={ device }/>*/ }
      <DeviceMain
        moreLink={ false }
        device={ device }/>
      <div className="mx-5">
        <h2 className="mt-8 mb-8 ">
          فيديو تعريفي
        </h2>
        <div
          style={ {
            width: "100%",
            height: "300px",
          } }
          className=" relative my-5"
        >
          <YoutubeIframe
            link={ banner.link }
            title={ banner.title }/>
        </div>
      </div>

      <DeviceFeatures
        features={ features } title={ title }/>

      {
        guideVideos &&
        <DeviceGuildeVideo
          banner={ banner } guideVideos={ guideVideos }
          title={ title }/>
      }
      {/*{*/ }
      { guideBook &&
        <DeviceGuideBook
          title={ title } guideBook={ guideBook }
          technicalSpecifications={ device.technicalSpecifications }
          file={ guideBookFile }/> }
      {/*}*/ }
    </>
  )
}