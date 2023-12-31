export const Package = ({ picked, item, setItemPlan, index, setItemOption }) =>
{
  const { name, price, type, id, packagePriceDescription, options } = item
  return (
    <li>
      <div
        onClick={ () => setItemPlan &&
          setItemPlan(index, name, price, type, id, packagePriceDescription) }
        className={ `bg-secondary w-64 rounded ${ picked === name &&
        "border border-primary" }` }>
        <div
          className={ `h-32  py-5 px-3 flex flex-col justify-center ${ picked ===
          name &&
          "text-white bg-primary" } p-4 rounded` }>
          {/* <h3>
           { title }
           </h3> */ }
          <p className={ `text-sm text-black py-2 ${ picked === name &&
          "text-white bg-primary " } ` }>
            { name }
          </p>
          <p className={ `text-sm ${ picked === name &&
          "text-white bg-primary " }` }>
            { packagePriceDescription }
          </p>
        </div>
        {/*<ul className="p-4 divide-y">*/ }
        {/*  { Object.keys(packagesFeaturesTitles).map((featureKey, i) => (*/ }
        {/*    <li*/ }
        {/*      className="h-20 flex items-center justify-center text-sm"*/ }
        {/*      key={ i }>{ features[featureKey]  }</li>*/ }
        {/*  )) }*/ }
        {/*</ul>*/ }
      </div>
      {
        name === picked && options && <div className="w-64 rounded my-3">
          <ul className="">
            <label htmlFor={ "option" } className="text-sm text-black text-start ">
              ما هى شريحه البيانات التى ستقوم بإستخدامها مع الجهاز؟
              </label>
            {
              options?.map((option, i) =>
                <li
                  key={ i }
                  className="h-8 mx-7 flex items-center justify-start  text-sm">
                  <input
                    onChange={ () => setItemOption(option.value) }
                    id={ option.title }
                    type="radio"
                    className="form-checkbox mx-1"
                    name={ "option" }
                    value={ option.title }
                  />
                  <label

                    htmlFor={ option.title }
                    className="flex items-center gap-">
                    { option.title }

                  </label>
                </li>,
              )
            }
          </ul>
        </div>
      }
    </li>
  )
}