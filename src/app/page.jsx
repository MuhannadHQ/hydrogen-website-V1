import { devices } from "apis/data/devicesData";
import { AboutUs } from "components/AboutUs";
import { ContactUs } from "components/ContactUs";
import DeviceLeft from "components/device/DeviceLeft";
import { DeviceMain } from "components/device/DeviceMain";
import { Features } from "components/Features";
import { Navbar } from "components/global/Navbar";
import YoutubeIframe from "components/global/YoutubeIframe";
import WaterSourcePopup from "components/home/WaterSourcePopup";
import { Testimonials } from "components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="bg-linear">
        <Navbar show={true} />

        {/*<DeviceMain device={ devices.lamda } bg={ true }/>*/}
        <DeviceMain device={devices.alpha} bg={true} />
      </div>

      <AboutUs />
      <Features />
      <Testimonials />
      <ContactUs onlyform={true} />
      {/* <WaterSourcePopup /> */}
    </>
  );
}
