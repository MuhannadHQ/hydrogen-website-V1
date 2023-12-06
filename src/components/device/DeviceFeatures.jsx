export const DeviceFeatures = ({ title, features }) =>
{
  return (
    <section className="general-padding py-10 bg-secondary">
      <h2>مزايا الجهاز</h2>
      <ul className="flex justify-center items-center flex-wrap my-10">
        {
          features?.map((feature, i) => (
            <li key={ i }
                className="w-full sm:w-1/2 md:w-1/3  2xl:w-3/12 p-5 flex flex-col items-center  justify-center">
              <div className=" mb-3">{ feature.icon }</div>
              <h3 className=" pb-1 whitespace-nowrap">
                { feature.title }
              </h3>
              <p className="w-56 sm:w-auto">
                { feature.description }
              </p>

            </li>
          ))
        }
      </ul>
    </section>
  )
}