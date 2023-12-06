import { DeviceFeatures } from "components/device/DeviceFeatures"
import { DeviceGuideBook } from "components/device/DeviceGuideBook"
import { DeviceGuildeVideo } from "components/device/DeviceGuildeVideo"
import { DeviceHeader } from "components/device/DeviceHeader"
import { DeviceMain } from "components/device/DeviceMain"
import {
  TechnicalSpecifications
} from "components/device/TechnicalSpecifications"

export const Device = ({ device }) =>
{
  const {
    title,
    features,
    guideBook,
    guideVideos,
    banner,
  } = device || {}
  return (
    <>
      <DeviceHeader device={ device }/>
      <DeviceMain
        moreLink={ false }
        device={ device }/>
      <DeviceFeatures
        features={ features } title={ title }/>
      <TechnicalSpecifications technicalSpecifications={ device.technicalSpecifications }/>
      {/*{*/}
      {/*  guideVideos &&*/}
      {/*  <DeviceGuildeVideo*/}
      {/*    banner={ banner } guideVideos={ guideVideos }*/}
      {/*    title={ title }/>*/}
      {/*}*/}
      {/*{*/}
      {/*  guideBook && <DeviceGuideBook title={ title } guideBook={ guideBook }/>*/}
      {/*}*/}
    </>
  )
}