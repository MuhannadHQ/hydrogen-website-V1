import { Package } from "components/Booking/Package"

export const PackagesList = ({
  packages,
  packagesFeaturesTitles,
  title,
  index,
  plan,
  setItemPlan,
}) =>
{
  return (
    <section className="">
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
          packages.map((item, i) =>
            <Package
              packagesFeaturesTitles={ packagesFeaturesTitles }
              setItemPlan={ setItemPlan }
              index={ index }
              name={ item.name }
              picked={ plan }
              title={ item.title }
              price={ item.price }
              features={ item.features }
              key={ i }/>,
          )
        }
      </ul>
    </section>
  )
}