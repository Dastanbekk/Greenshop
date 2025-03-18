import AppBar from "../../components/app-bar";
import Navbar from "../../components/navbar";
import Showcase from "../../components/showcase";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <div className="sm:hidden">
        <AppBar />
      </div>
    </div>
  );
};

export default Home;
