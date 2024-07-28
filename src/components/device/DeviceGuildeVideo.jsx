import YoutubeIframe from "components/global/YoutubeIframe";
import Image from "next/image";

export const DeviceGuildeVideo = ({ banner, guideVideos, title }) => {
  return (
    <section>
      <div className="my-10">
        <h2 className="text-center">طريقة التركيب</h2>
        <p className="text-center">
          يرجى اختيار نوع الخزان الذي ترغب في تركيب الجهاز عليه.
        </p>
        <ul className="flex justify-between general-padding my-8 flex-col sm:flex-row">
          {guideVideos.map((video, i) => (
            <li
              key={i}
              className="flex flex-col items-center sm:w-6/12 w-full my-3"
            >
              <button
                onClick={() => {
                  window.open(video.link, "_blank");
                }}
                className={`btn btn-primary`}
              >
                الخزان {i === 0 ? "السفلي" : "العلوي"}
              </button>
              {/* <div className="h-60 w-full relative mt-2">
        <YoutubeIframe link={video.link} title={video.title} />
      </div> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
