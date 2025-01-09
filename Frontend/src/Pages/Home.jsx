import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Process from "../Components/Process";
import Popular from "../Components/Popular";
import coverBanner from "../assets/coverBanner.jpg";
import coverBanner1 from "../assets/coverBanner1.jpg";
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <Features/>
      <Process/>
      <Popular/>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-7 py-12" >
        <div><img src={coverBanner} className="md:rounded-e-2xl" alt="" /></div>
        <div><img src={coverBanner1} className="md:rounded-s-2xl" alt="" /></div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
