import YoutubeIframe from "components/global/YoutubeIframe";
function DeviceBanner({ banner }) {
  return (
    <div className="mx-5">
      <h2 className="mt-8 mb-8 ">فيديو تعريفي</h2>
      <div className=" relative my-5 Device-video">
        <YoutubeIframe link={banner?.link} title={banner?.title} />
      </div>
    </div>
  );
}

export default DeviceBanner;
