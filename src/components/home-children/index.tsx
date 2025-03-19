import Showcase from "../showcase";
import AppBar from "../app-bar";
import Sidebar from "../home-sections/sidebar";
import Products from "../home-sections/products/products";

const HomeChildren = () => {
  return (
    <div>
      <Showcase />

      <div className="containerr">
        <div className="grid gap-10 grid-cols-[25%_minmax(70%,_1fr)] mt-5">
          <Sidebar />
          <Products />
        </div>
      </div>

      <div className="sm:hidden">
        <AppBar />
      </div>
    </div>
  );
};

export default HomeChildren;
