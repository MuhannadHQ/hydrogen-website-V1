import { AboutUs } from "components/AboutUs"
import Vision from "assets/icons/Vision";
import Goal from "assets/icons/Goal";
import Value from "assets/icons/Value";
const aboutUSData = [
  {
    title: "هدفنا",
    description: "تسهيل الحياة من خالل منتجاتنا وخدماتنا",
    icon: <Goal />,
  },
  {
    title: "رؤيتنا",
    description: "رفع اإلنتاجية إلى مستويات غير مسبوقة",
    icon: <Vision />,
  },
  {
    title: "قيمنا",
    description: "االبتكار - النزاهة - الجودة - رضا العملاء - التأقلم",
    icon: <Value />,
  },
];
const page = () =>
{
  return (
    <>
      {aboutUSData.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-5 my-20">
          <div className="w-20 h-20">{item.icon}</div>
          <h2 className=" text-2xl font-bold">{item.title}</h2>
          <p className="text-l">{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default page
