import { Package } from "components/Booking/Package"

export const PackagesList = ({
  itemData,
  index,
  plan,
  setItemPlan,
}) =>
{
  return (
    <section className="">
      <h3 className="text-center  my-10 ">
      الجهاز
    </h3>
    <div className="flex items-center justify-center">
      <Package
        picked={itemData.deviceDescription}
        title= "ألفــا"
        item={{
          name: itemData.deviceDescription,
          priceDescription: itemData.priceDescription,
        }}
      />
    </div>
      <h2 className="text-center text-2xl my-10 ">
        الباقات
      </h2>
      <ul
        className="flex items-end gap-2  sm:gap-5 md:gap-10 my-5 justify-center">
        {/*<li className=" text-center w-1/4">*/}
        {/*  <ul className="divide-y p-4 text-sm">*/}
        {/*    {*/}
        {/*      Object.values(packagesFeaturesTitles).map((item, i) =>*/}
        {/*        <li key={ i }*/}
        {/*            className="h-20 flex items-center justify-center text-sm"> { item } </li>,*/}
        {/*      )*/}
        {/*    }*/}
        {/*  </ul>*/}
        {/*</li>*/}
        {
        itemData.packages.map((item, i) =>
            <Package
              setItemPlan={ setItemPlan }
              index={ index }
              item={ item }
              picked={ itemData.plan }
              key={ i }/>,
          )
        }
      </ul>
    </section>
  )
}
