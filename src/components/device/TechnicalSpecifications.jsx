export const TechnicalSpecifications = ({ technicalSpecifications }) => {
  return (
    <section className="general-padding text-center flex justify-center flex-col items-center gap-4 my-5">
      <h2>المواصفات الفنية</h2>
      <div className="border-t-2 border-b-2 py-5 border-black xs:w-96 hidden xs:block">
        <table className="w-full ">
          <tbody>
            {technicalSpecifications?.map((specification, index) => (
              <tr key={index}>
                <td className="text-start">{specification.title}</td>
                <td className="text-end">{specification.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="flex whitespace-nowrap flex-wrap p-2 border rounded-xl shadow-md xs:hidden">
        {technicalSpecifications?.map((specification, index) => (
          <li
            key={index}
            className="flex flex-col gap-2 items-center w-1/2 my-3"
          >
            <p className="text-start">{specification.title}</p>
            <span className="text-end text-primary">{specification.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
