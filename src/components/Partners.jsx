import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import { Arrow } from "assets/icons/Arrow";
// import alzamil from "assets/images/alzamil.png";
import crownPlaza from "assets/images/crowne_plaza.png";
import fitnessTime from "assets/images/fitness-time.png";
import ministryOfToursim from "assets/images/mt.png";
import najm from "assets/images/najm.png";
import optimo from "assets/images/optimo.jpg";
import ministryofdefense from "assets/images/ministry_of_defense.png";



// const handleDragStart = (e) => e.preventDefault();

export const Partners = () => {
  return (
    <section className="bg-secondary  pt-10">
      <h3 className=" md:text-2xl">عملاؤنا في قطاع الأعمال</h3>
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
        items={partnerssData.map((partner, index) => (
            <div key={index} className="bg-white mx-3 p-5 rounded-3xl h-40 flex flex-col items-center">
            <img src={partner.image} alt={partner.name} className="h-32 w-32 object-contain" />
            {/* <p className="text-end mt-5">{testimonial.name}</p> */}
            </div>
        ))}
        />
      </div>
    </section>
  );
};

const partnerssData = [
    {
      id: 1,
      name: "كراون بلازا",
      image:  crownPlaza.src,
    },
    {
      id: 2,
      name: "وقت اللياقة",
      image:  fitnessTime.src,
    },
    {
      id: 3,
      name: "وزارة السياحة",
      image:  ministryOfToursim.src,
    },
    {
      id: 4,
      name: "نجم",
      image:  najm.src,
    },
    {
      id: 5,
      name: "أوبتيمو",
      image:  optimo.src,
    },
    {
        id: 6,
        name: "وزارة الدفاع",
        image:  ministryofdefense.src,
    }



  ];

  