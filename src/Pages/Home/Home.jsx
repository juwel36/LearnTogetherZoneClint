import Banner from "../../Components/Banner";
import Footer from "../../Components/Navbar/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
  return (
  <div className="bg-white">
      <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
<Banner></Banner>

<Footer></Footer>

    </div>
  </div>
  );
};

export default Home;