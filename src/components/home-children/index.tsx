import Showcase from "../showcase";
import AppBar from "../app-bar";
import Sidebar from "../home-sections/sidebar";
import Products from "../home-sections/products/products";
import PaginationProduct from "../home-sections/products/pagination-product";
import Reklama_Products from "../home-sections/reklama-products";
import BlogPost from "../blog-posts";

const HomeChildren = () => {
  return (
    <div>
      <Showcase />

      <div className="containerr">
        <div className="py-5">
          <div className="grid gap-10 lg:grid-cols-[25%_minmax(70%,_1fr)] mt-5">
            <div className="lg:block hidden">
              <Sidebar />
            </div>
            <Products />
          </div>
          <div className="flex justify-center lg:justify-end mt-3">
            <PaginationProduct />
          </div>
        </div>
      </div>
      <Reklama_Products />
      <BlogPost />
      <div className="hidden">
        <AppBar />
      </div>
    </div>
  );
};

export default HomeChildren;
