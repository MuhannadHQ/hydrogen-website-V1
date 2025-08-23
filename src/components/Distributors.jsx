import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import { Arrow } from "assets/icons/Arrow";
import naqa from "assets/images/naqa.png";



// const handleDragStart = (e) => e.preventDefault();

export const Distributors = () => {
  return (
    <section className="bg-secondary  pt-10">
      <h3 className=" md:text-2xl">الموزعين المعتمدين</h3>
      <div className="mt-10 general-padding">
        <div className="bg-white mx-3 p-5 rounded-3xl h-40 flex flex-col items-center">
          <a href="https://bit.ly/4lH4kkq" target="_blank" rel="noopener noreferrer">
            <img src={naqa.src} alt={"naqa"} className="h-32 w-32 object-contain" />
          </a>
        </div>
     


      
      {/* <p className="text-end mt-5">{testimonial.name}</p> */}

    
      </div>
    </section>
  );
};

const DistributorsData = [
    {
      id: 1,
      image:  naqa.src,
      url: "https://bit.ly/4lH4kkq"
    }

];

  