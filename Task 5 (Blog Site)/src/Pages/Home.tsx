import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Data from "../Components/Blog/Data";

const Home = (): JSX.Element => {
  return (
    <div className="bg-[#a9d6e5]">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center flex-col items-center ">
        <Data />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
