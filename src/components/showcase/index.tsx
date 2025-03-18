import { Button } from "antd";
import showcaseImg from "../../assets/img/showcase.png";
import showcaseImgChild from "../../assets/img/showcaseChild.png";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


const Showcase: React.FC = () => {
  return (
    <div className="">
      <div className="containerr">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            {" "}
            <div className="sm:bg-[#F5F5F580] bg-[#D7EBDB] pt-8 sm:pt-16 pb-10 sm:pb-20  relative flex items-center mt-5 rounded-4xl sm:rounded-2xl px-5 sm:px-10">
              <div className="max-w-[50%] flex flex-col gap-3">
                <h2 className="text-[14px]">Welcome to GreenShop</h2>
                <h3 className="text-[19px] leading-7 uppercase sm:leading-20 max-w- sm:text-[35px] md:text-[70px] font-bold">
                  Let’s Make a Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h3>
                <p className="hidden sm:block text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <p className="sm:hidden text-[14px] text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range
                </p>
                <div className="mt-7">
                  <Button
                    type="primary"
                    className="!bg-[#46A358] !hidden sm:!flex  !py-5 !max-w-[140px] !w-full !font-bold "
                  >
                    SHOP NOW
                  </Button>
                  <Link to={"#"} className="!text-[#46A358] sm:hidden">
                    SHOP NOW <ArrowRightOutlined className="!text-[#46A358]" />
                  </Link>
                </div>
              </div>
              <div className="absolute right-0">
                <div className="relative ">
                  <div className="absolute bottom-4 left-5 sm:bottom-9 sm:left-10">
                    <img
                      className="w-[50%] lg:w-full"
                      src={showcaseImgChild}
                      alt=""
                    />
                  </div>
                  <img
                    className="w-[220px] sm:w-[400px] lg:w-full "
                    src={showcaseImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="sm:bg-[#F5F5F580] bg-[#D7EBDB] pt-8 sm:pt-16 pb-10 sm:pb-20  relative flex items-center mt-5 rounded-4xl sm:rounded-2xl px-5 sm:px-10">
              <div className="max-w-[50%] flex flex-col gap-3">
                <h2 className="text-[14px]">Welcome to GreenShop</h2>
                <h3 className="text-[19px] leading-7 uppercase sm:leading-20 max-w- sm:text-[35px] md:text-[70px] font-bold">
                  Let’s Make a Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h3>
                <p className="hidden sm:block text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <p className="sm:hidden text-[14px] text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range
                </p>
                <div className="mt-7">
                  <Button
                    type="primary"
                    className="!bg-[#46A358] !hidden sm:!flex  !py-5 !max-w-[140px] !w-full !font-bold "
                  >
                    SHOP NOW
                  </Button>
                  <Link to={"#"} className="!text-[#46A358] sm:hidden">
                    SHOP NOW <ArrowRightOutlined className="!text-[#46A358]" />
                  </Link>
                </div>
              </div>
              <div className="absolute right-0">
                <div className="relative ">
                  <div className="absolute bottom-4 left-5 sm:bottom-9 sm:left-10">
                    <img
                      className="w-[50%] lg:w-full"
                      src={showcaseImgChild}
                      alt=""
                    />
                  </div>
                  <img
                    className="w-[220px] sm:w-[400px] lg:w-full "
                    src={showcaseImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="sm:bg-[#F5F5F580] bg-[#D7EBDB] pt-8 sm:pt-16 pb-10 sm:pb-20  relative flex items-center mt-5 rounded-4xl sm:rounded-2xl px-5 sm:px-10">
              <div className="max-w-[50%] flex flex-col gap-3">
                <h2 className="text-[14px]">Welcome to GreenShop</h2>
                <h3 className="text-[19px] leading-7 uppercase sm:leading-20 max-w- sm:text-[35px] md:text-[70px] font-bold">
                  Let’s Make a Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h3>
                <p className="hidden sm:block text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <p className="sm:hidden text-[14px] text-[#727272] max-w-[530px]">
                  We are an online plant shop offering a wide range
                </p>
                <div className="mt-7">
                  <Button
                    type="primary"
                    className="!bg-[#46A358] !hidden sm:!flex  !py-5 !max-w-[140px] !w-full !font-bold "
                  >
                    SHOP NOW
                  </Button>
                  <Link to={"#"} className="!text-[#46A358] sm:hidden">
                    SHOP NOW <ArrowRightOutlined className="!text-[#46A358]" />
                  </Link>
                </div>
              </div>
              <div className="absolute right-0">
                <div className="relative ">
                  <div className="absolute bottom-4 left-5 sm:bottom-9 sm:left-10">
                    <img
                      className="w-[50%] lg:w-full"
                      src={showcaseImgChild}
                      alt=""
                    />
                  </div>
                  <img
                    className="w-[220px] sm:w-[400px] lg:w-full "
                    src={showcaseImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Showcase;
