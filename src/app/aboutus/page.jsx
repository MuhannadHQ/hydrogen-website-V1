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
      {aboutUSData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center py-10 ${
            index % 2 === 0 ? "" : "bg-gray-100"
          }`}
        >
          <div className="w-24 h-24">{item.icon}</div>
          <h2 className=" text-2xl pb-8 font-bold">{item.title}</h2>
          <p className="text-l">{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default page
