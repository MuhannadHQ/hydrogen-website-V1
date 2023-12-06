import { Device } from "components/device/Device"
import { devices } from "apis/data/devicesData"
import { Questions } from "components/Questions"
export async function generateStaticParams() {
  return Object.keys(devices).map((device) => ({ params: { device } }))
}
const page = ({params})=> {

  const device = params.device
  return <>
    <Device device={devices[device]} />
  </>
}

export default page