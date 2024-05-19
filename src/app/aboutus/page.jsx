import { AboutUs } from "components/AboutUs"
import Vision from "assets/icons/Vision";
import Goal from "assets/icons/Goal";
import Value from "assets/icons/Value";
const aboutUSData = [
  {
    title: "هدفنا",
    description: "تسهيل الحياة من خلال منتجاتنا وخدماتنا",
    icon: <Goal />,
  },
  {
    title: "رؤيتنا",
    description: "رفع الإنتاجية إلى مستويات غير مسبوقة",
    icon: <Vision />,
  },
  {
    title: "قيمنا",
    description: "الابتكار - النزاهة - الجودة - رضا العملاء - التأقلم",
    icon: <Value />,
  },
];
const page = () =>
{
  return (
    <>
      <section>
        <div className="flex-wrap h-64 text-base text-gray-800 bg-secondary px-5 pt-5  flex items-center justify-center">
          <h2 className="">
            <p className="text-primary  px-1"> تعرف على هيدروجين </p>
            <p className="text-base py-1"> حيث يلتقي الابتكار بالبساطة</p>
          </h2>
        </div>
        {aboutUSData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-10 ${
              index % 2 === 0 ? "" : "bg-secondary"
            }`}
          >
            <div className="w-24 h-24">{item.icon}</div>
            <h2 className=" text-2xl pb-8 font-bold">{item.title}</h2>
            <p className="text-l">{item.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default page
