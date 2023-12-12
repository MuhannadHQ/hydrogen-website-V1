
export const Package = ({ picked, name, title, price,priceTitle, features, setItemPlan, index, packagesFeaturesTitles, type }) =>
{
  return (
    <li
      onClick={ () => setItemPlan(index, name, price, type ) }
      className={ `bg-secondary w-64 rounded ${ picked === name &&
    "border border-primary" }` }>
      <div className={ `h-32  py-5 px-3 flex flex-col justify-center ${ picked === name &&
      "text-white bg-primary" } p-4 rounded` }>
        {/* <h3 className="text-sm text-black">{ title }</h3> */}
        <p className={`text-sm text-black py-2 ${picked === name &&
        "text-white bg-primary "}`}>
          {name}
        </p>
        <p className={`text-sm ${picked === name &&
          "text-white bg-primary "}`}>
          { priceTitle }
        </p>
      </div>
      {/*<ul className="p-4 divide-y">*/}
      {/*  { Object.keys(packagesFeaturesTitles).map((featureKey, i) => (*/}
      {/*    <li*/}
      {/*      className="h-20 flex items-center justify-center text-sm"*/}
      {/*      key={ i }>{ features[featureKey]  }</li>*/}
      {/*  )) }*/}
      {/*</ul>*/}
    </li>
  )
}