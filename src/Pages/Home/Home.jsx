import Banner from "../../Components/Banner";
import FaqSection from "../../Components/FaqSection";
import Footer from "../../Components/Navbar/Footer";
import Navbar from "../../Components/Navbar/Navbar";



const Home = () => {
  return (
    <div className="bg-white">
    <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
<Banner></Banner>


<p className="text-xl text-black py-3 "> Common Qustion </p>
<FaqSection></FaqSection>

<Footer></Footer>

    </div>
  </div>
  );
};

export default Home;