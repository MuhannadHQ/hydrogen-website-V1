"use client";
import { BuyBtn } from "components/global/BuyBtn";
//

// export const DeviceHeader = ({ device }) => {
//   const { price, name } = device || {};
//   return (
//     <div className="flex general-padding justify-between py-2 bg-black text-white items-center">
//       <h3>{name}</h3>
//       <br />
//       <div className="flex gap-5 items-center">
//         <div>
//           <span className="text-xs">  ابتداء من</span>
//           {/* <br/> */}
//           {price}
//         </div>
//         <BuyBtn device={device} type={"btn-secondary"} />
//       </div>
//     </div>
//   );
// };




export default function DevicePage() {
  const params = useParams();
  const [deviceData, setDeviceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch device data on client side
    const fetchDeviceData = async () => {
      try {
        // Replace with your API call
        const response = await fetch(`/api/devices/${params.device}`);
        const data = await response.json();
        setDeviceData(data);
      } catch (error) {
        console.error('Error fetching device data:', error);
        setDeviceData({ name: 'Device Not Found', price: 'N/A' });
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceData();
  }, [params.device]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DeviceHeader device={deviceData} />
      {/* Rest of your page content */}
    </div>
  );
}