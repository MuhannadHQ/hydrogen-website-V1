import { BuyBtn } from "components/global/BuyBtn";
import { MoreLink } from "components/global/MoreLink";

export const DeviceMain = ({
  device,
  reverse = false,
  bg,
  moreLink = true,
}) => {
  const { title, description, path, name, images } = device || {};
  return (
    <>
      <main
        className={`${
          bg ? "" : "bg-linear"
        } pt-5 flex flex-col md:flex-row justify-center  items-center md:items-end md:gap-20 general-padding md:text-start  pb-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {moreLink && (
          <div className="pt-3">
            <>
              <h2 className="text-3xl mb-3">{title}</h2>
              <p className="text-2xl">{description}</p>
            </>

            <div className="mt-20 mb-10 hidden md:flex gap-3 items-center">
              <BuyBtn type={"btn-primary"} device={device} />

              <MoreLink link={path} color={"text-primary"} />
            </div>
          </div>
        )}
        <div className="">
          {images?.map((image, i) => (
            <img
              className={`h-60 sm:h-80 pt-3`}
              key={i}
              src={image.src}
              alt={name}
            />
          ))}
        </div>
        {moreLink && (
          <div className="my-8 md:hidden flex gap-3 items-center flex-col">
            <>
              <BuyBtn type={"btn-primary"} device={device} />
              <MoreLink link={path} color={"text-primary"} />
            </>
          </div>
        )}
      </main>
      {/*<main*/}
      {/*  className={ `flex items-center justify-center general-padding bg-linear py-20 flex-col` }>*/}
      {/*  <div className="">*/}
      {/*    <h1>*/}
      {/*      { title }*/}
      {/*    </h1>*/}
      {/*    <p>*/}
      {/*      { description }*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className="flex gap-3  items-end">*/}
      {/*    {*/}
      {/*      images.map((image, i) => (*/}
      {/*        <img*/}
      {/*          style={ {*/}
      {/*            maxWidth: image.width,*/}
      {/*          } }*/}
      {/*          key={ i }*/}
      {/*          src={ image.src }*/}
      {/*          alt={ name }*/}
      {/*        />*/}
      {/*      ))*/}
      {/*    }*/}
      {/*  </div>*/}
      {/*  */}
      {/*</main>*/}
    </>
  );
};
