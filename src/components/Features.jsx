import feature1 from "assets/images/feature1.png";
import feature2 from "assets/images/feature2.png";
import { MoreLink } from "components/global/MoreLink"
import Image from "next/image"

const features = [
  // {
  //   title: "إدارة مستوى الماء في الخزان",
  //   description: "من تطبيق هيدروجين يمكنك متابعة وإدارة مستوى الماء في الخزان بدقة دون الحاجة إلى فتح غطاء الخزان",
  //   image: feature1,
  // },
  // {
  //   title: "تحكم بتدفق مياه الخزان",
  //   description: "يمكنك التحكم بتدفق مياه الخزان أو جدولتها من أي وقت و في أي مكان في حال اختيار جهاز لامدا",
  //   image: feature2,
  // },
  // {
  //   title: "طلب صهريج المياه",
  //   description: "اطلب صهريج المياه مباشرة عبر التطبيق، وراح يتم الوصول
  // لنقطتك وإعادة تعبئة خزانك بكل سهولة", image: feature3, },
]
export const Features = () =>
{
  return (
    <section className="general-padding my-20">
      <ul className="home-features">
        { features.map((feature, index) =>
          <li key={ index }
              className={ `${ index % 2 !== 0 &&
              "sm:flex-row-reverse" } flex flex-col sm:flex-row items-center gap-10 text-center sm:text-start justify-center` }>
            <div>
              <h3>
                { feature.title }
              </h3>
              <p className="mb-10 mt-4">
                { feature.description }
              </p>
              <div className="w-fit">
                <MoreLink link={ "/lamda" } color={ "#000" }/>
              </div>
            </div>
            <div className="relative w-full sm:w-80 h-72">
              <Image
                fill
                src={ feature.image } alt={ feature.title }/>
            </div>
          </li>,
        ) }
      </ul>
    </section>
  )
}