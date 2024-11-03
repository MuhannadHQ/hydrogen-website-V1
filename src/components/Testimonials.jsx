"use client";

import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import { Arrow } from "assets/icons/Arrow"

// const handleDragStart = (e) => e.preventDefault();


export const Testimonials = () =>
{

const TestimonialsData = [
  {
    id: 1,
    message:
      "الجهاز جدا ممتاز وكل ما قابلت أحد كلمته عن جهازكم لأني جداً ريحني من فتح غطاء الخزان",
    name: "عبدالله",
  },
  {
    id: 0,
    name: "ماجد",
    message:
      "استلمت أول فاتورة مياه بعد تركيب الجهاز، والنتيجة كانت مذهلة.. أتمنى لكم التوفيق",
  },
  {
    id: 2,
    message: "واجهة تطبيق الجوال سهلة الاستخدام، والجهاز يعتمد عليه",
    name: "محمد",
  },
];
  return (
    <section className="my-20  bg-secondary  pt-10">
      <h3 className=" md:text-2xl">
        آراء عملائنا تدفعنا لتقديم الأفضل
      </h3>
      <div className="mt-10 general-padding">
        <AliceCarousel

          // autoPlay={ true }
          autoPlayInterval={ 3000 }
          infinite={ true }
          swipeExtraPadding={ 50 }
          responsive={ {
            0: {
              items: 1,
            },
            800: {
              items: 2,
            },
            1250: {
              items: 3,
            },
          } }
          renderPrevButton={ () => <button
            className=" w-10 h-10 top-1/4 -left-5 absolute hover:bg-white flex justify-center items-center rounded-full">
            <Arrow color={"#000"}/>
          </button> }
          renderNextButton={ () => <button
            className=" w-10 h-10 top-1/4 -right-5 absolute rotate-180 hover:bg-white flex justify-center items-center rounded-full">
            <Arrow color={"#000"} />
          </button> }

          mouseTracking items={
          TestimonialsData.map((testimonial, index) =>
            <div key={ index }
                 className="bg-white mx-3 p-5 rounded-3xl  h-40 ">
              <p className="text-center">
                { testimonial.message }
              </p>
              <p className="text-end mt-5">
                { testimonial.name }
              </p>
            </div>,
          )
        }/>
      </div>

    </section>
  )
}
