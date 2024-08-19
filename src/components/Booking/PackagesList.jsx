import { Package } from "components/Booking/Package";
import { packagesFeaturesTitles } from "apis/data/devicesData";
export const PackagesList = ({
  itemData,
  index,
  plan,
  setItemPlan,
  setItemOption,
}) => {
  return (
    <section className="">
      {/*  <h3 className="text-center text-2xl my-10 ">*/}
      {/*  الجهاز*/}
      {/*</h3>*/}
      {/*<div className="flex items-center justify-center">*/}
      {/*  <Package*/}
      {/*    picked={itemData.deviceDescription}*/}
      {/*    title= "ألفــا"*/}
      {/*    item={{*/}
      {/*      name: itemData.deviceDescription,*/}
      {/*      priceDescription: itemData.priceDescription,*/}
      {/*      packagePriceDescription: itemData.priceDescription*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</div>*/}
      <h2 className="text-center text-2xl my-10 ">الباقات</h2>
      <ul className="flex overflow-x-auto items-start justify-center gap-3 sm:gap-5 md:gap-10 my-5 ">
        <li className="text-center ">
          <ul className="divide-y w-24 text-sm pt-36">
            {Object.values(packagesFeaturesTitles).map((item, i) => (
              <li
                key={i}
                className="h-16 flex items-center justify-center text-sm"
              >
                {" "}
                {item}{" "}
              </li>
            ))}
          </ul>
        </li>
        {itemData.packages.map((item, i) => (
          <Package
            setItemPlan={setItemPlan}
            setItemOption={setItemOption}
            index={index}
            item={item}
            picked={itemData.plan}
            key={i}
          />
        ))}
      </ul>
    </section>
  );
};
