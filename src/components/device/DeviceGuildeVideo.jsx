import YoutubeIframe from "components/global/YoutubeIframe"
import Image from "next/image"

export const DeviceGuildeVideo = ({ banner, guideVideos, title }) =>
{
  return (
    <section>
      <div className="w-full relative sm:h-559 h-96">
       <YoutubeIframe link={ banner.link } title={banner.title} />
      </div>
      <div className="my-10">
        <h2>
          { title }
        </h2>
        <p>
          طريقة التركيب للخزان العلوي والسفلي
        </p>
        <ul
          className="flex justify-between general-padding gap-20 my-14 flex-col sm:flex-row">
          {
            guideVideos.map((video, i) => (
              <li key={ i } className="h-80 sm:w-6/12 w-full relative">
                <YoutubeIframe link={ video.link } title={video.title} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}