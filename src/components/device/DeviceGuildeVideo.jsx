import YoutubeIframe from "components/global/YoutubeIframe";
import Image from "next/image";

export const DeviceGuildeVideo = ({ banner, guideVideos, title }) => {
  return (
    <section>
      <div className="my-10">
        <h2 className="text-center" style={{ fontSize: '22px' }}>طريقة التركيب</h2>
        <p className="text-center my-10">
         يمكن تركيب الجهاز بكل سهولة خلال 10 دقائق أو الاستعانة بسباك أو كهربائي
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
                طريقة تركيب الخزان {i === 0 ? "السفلي" : "العلوي"}
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
