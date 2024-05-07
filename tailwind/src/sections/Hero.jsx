import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container  padding-x"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 "></div>
      <p className="">Our Summer Collection</p>
      <h1>
        <span>The New Arrival</span>
        <br />
        <span>Nike</span>
        Shoes
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="show now" iconURL={arrowRight}/>
      </h1>

    </section>
  );
};

export default Hero;
