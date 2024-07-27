import YoutubeIframe from "components/global/YoutubeIframe"
import Image from "next/image"

export const DeviceGuildeVideo = ({ banner, guideVideos, title }) =>
{
  return (
    <section>
      <div className="my-10">
        <h2 className="text-center">طريقة التركيب</h2>

        <ul className="flex justify-between general-padding gap-4 my-14 flex-col sm:flex-row">
          {guideVideos.map((video, i) => (
            <>
              <li key={i} className="sm:w-6/12 w-full relative ">
                <p className="mb-3">الخزان {i === 0 ? "السفلي" : "العلوي"}</p>
                <div className="h-60 relative mb-5 rounded-lg overflow-hidden">
                  <YoutubeIframe link={video.link} title={video.title} />
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}
