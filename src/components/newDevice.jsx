import { ContactUs } from "components/ContactUs"
import { Navbar } from "components/global/Navbar"

const page = () =>
{
  return (
    <div className="bg-linear">
      <Navbar show={true}/>
    <ContactUs />
    </div>
  );
};

export default page;