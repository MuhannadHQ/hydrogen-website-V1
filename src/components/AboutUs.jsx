import Image from "next/image"
import ma3roof from "assets/images/maroof.png"
export const AboutUs = () =>
{
  return (
    <section className="general-padding flex flex-col items-center gap-5 my-20">
      <h2 className="text-primary   ">
        معتمدين في معروف

      </h2>
      <p className="text-l">
        هيدروجين شركة مسجلة في منصة معروف المقدمة من وزارة التجارة برقم 108013

      </p>
      <a href="https://maroof.sa/businesses/details/108013"  target="_blank" rel="noopener noreferrer">
      <Image src={ma3roof} alt={"معروف"} width={200} height={200} />
      </a>
    </section>
  )
}
