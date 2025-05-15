import Hero from "./Hero";
import Update from "../Home/Update";
import What from "./What";
import Details from "./Details";
import Trial from "../Pricing/Trial";

const Gettingstarted = () => {
  return (
    <div className="">
      <Hero />
      <What />
      <Details />
      <Update />
      <div className="container mx-auto">
        <Trial />
      </div>
    </div>
  );
};

export default Gettingstarted;
