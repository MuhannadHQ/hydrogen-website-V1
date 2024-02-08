import Image from "next/image"
export const DeviceGuideBook = ({ title, guideBook, file }) =>
{
  return (
    <section className="general-padding my-10">
      <h3>لللإطلاع على كتيب دليل تركيب { title } </h3>
      <div
        className="flex justify-center items-center gap-14 my-14 flex-col sm:flex-row">
        <a
          href={ "assets/guide-book.pdf" }
          download={ "assets/guide-book.pdf" }
          className="">
          <Image
            className="bg-secondary"
            width={ 250 }
            height={ 250 }
            src={ guideBook } alt={ title }/>
        </a>
          <div className="flex sm:flex-col justify-center gap-5">
      {/*      <button className="btn btn-primary ">*/}

      {/*        تحميل*/}
      {/* */}
      {/*</button>*/}

    </div>
</div>
</section>
)
}