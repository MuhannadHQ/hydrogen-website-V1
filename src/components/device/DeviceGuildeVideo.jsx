import YoutubeIframe from "components/global/YoutubeIframe"
import Image from "next/image"

export const DeviceGuildeVideo = ({ banner, guideVideos, title }) =>
{
  return (
    <section>

      <div className="my-10">
        <h2 className="text-center">طريقة التركيب</h2>

        <ul
          className="flex justify-between general-padding gap-4 my-14 flex-col sm:flex-row">
          {
            guideVideos.map((video, i) => (
              <>
                <li>
                  <p>
                     الخزان { i ===0? "السفلي" : "العلوي"}
                  </p>
                </li>
                <li key={ i } className="h-60 sm:w-6/12 w-full relative my-5">
                <YoutubeIframe link={ video.link } title={video.title} />
              </li>

              </>
            ))
          }
        </ul>
      </div>
    </section>
  )
}