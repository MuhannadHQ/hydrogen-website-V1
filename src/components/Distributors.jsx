import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import { Arrow } from "assets/icons/Arrow";
import alzamil from "assets/images/alzamil.png";



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
        items={DistributorsData.map((distrbutor, index) => (

            
            <div key={index} className="bg-white mx-3 p-5 rounded-3xl h-40 flex flex-col items-center">

            <a href={distrbutor.url} target="_blank" rel="noopener noreferrer">
                <img src={distrbutor.image} alt={distrbutor.name} className="h-32 w-32 object-contain" />
            </a>
            {/* <p className="text-end mt-5">{testimonial.name}</p> */}
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
      image:  alzamil.src,
      url: "https://bit.ly/4hkLoab"
    }

];

  