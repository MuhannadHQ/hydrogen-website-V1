import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import { Arrow } from "assets/icons/Arrow";
import alzamil from "assets/images/alzamil.png";
import amazon from "assets/images/amazon.png"
import noon from "assets/images/noon.png"





// const handleDragStart = (e) => e.preventDefault();


export const Distributors = () => {
  return (
    <section className="bg-secondary  pt-10">
      <h3 className=" md:text-2xl">الموزعين المعتمدين</h3>
      <div className="mt-10 general-padding">
      <AliceCarousel
        autoPlayInterval={2000}
        infinite={true}
        swipeExtraPadding={50}
        responsive={{
            0: { items: 1 },
            800: { items: 2 },
            1250: { items: 3 },
        }}
        renderPrevButton={() => (
            <button className="w-10 h-10 top-1/4 -left-5 absolute hover:bg-white flex justify-center items-center rounded-full">
            <Arrow color={"#000"} />
            </button>
        )}
        renderNextButton={() => (
            <button className="w-10 h-10 top-1/4 -right-5 absolute rotate-180 hover:bg-white flex justify-center items-center rounded-full">
            <Arrow color={"#000"} />
            </button>
        )}
        mouseTracking
        items={DistributorsData.map((distributor, index) => (
          <div key={index} className="bg-white mx-3 p-5 rounded-3xl h-40 flex flex-col items-center">
              <a href={distributor.url} target="_blank"> {/* Use <a> for links */}
                  <img src={distributor.image} alt="Distributor" className="h-32 w-32 object-contain" />
              </a>
          </div>
      ))}
        />
      </div>
    </section>
  );
};

const DistributorsData = [
    {
      id: 1,
      url: "https://store.zamilco.com/%D8%AC%D9%87%D8%A7%D8%B2-%D8%A7%D9%84%D9%81%D8%A7-%D9%84%D9%85%D8%B1%D8%A7%D9%82%D8%A8%D8%A9-%D9%85%D8%B3%D8%AA%D9%88%D9%89-%D8%A7%D9%84%D9%85%D8%A7%D8%A1-%D9%81%D9%8A-%D8%AE%D8%B2%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87?srsltid=AfmBOop-r3QngtbIAGJrgVLA-Zp0k8SojC_anuhb3VhOjCout50SLZps",
      image:  alzamil.src
    },
    {
      id: 2,
      url: "https://www.amazon.sa/dp/B0CVLCVN8Z?ref_=cm_sw_r_cp_ud_dp_8CQZBDC1MJ1ENWPGD5VV",
      image:  amazon.src,
    },
    {
      id: 3,
      url: "https://www.noon.com/saudi-ar/alpha-smart-device-for-water-level-analysis-and-monitoring/Z9C2AAAB3940054E0A6DCZ/p/?o=z9c2aaab3940054e0a6dcz-1",
      image:  noon.src,
    }


  ];

  ///

// export const Distributors = () => {
//   return (
//     <section className="bg-secondary  pt-10">
//       <h3 className=" md:text-2xl">الموزعين المعتمدين</h3>
//       <div className="mt-10 general-padding">
//         <div className="bg-white mx-3 p-5 rounded-3xl h-40 flex flex-col items-center">
//           <a href="https://bit.ly/4hkLoab" target="_blank" rel="noopener noreferrer">
//             <img src={alzamil.src} alt={"Alzamil"} className="h-32 w-32 object-contain" />
//           </a>
//         </div>
     


      
//       {/* <p className="text-end mt-5">{testimonial.name}</p> */}

    
//       </div>
//     </section>
//   );
// };

// const DistributorsData = [
//     {
//       id: 1,
//       image:  alzamil.src,
//       url: "https://bit.ly/4hkLoab"
//     }

// ];

  