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
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#D7EBDB] sm:bg-[#F5F5F580] pt-8 sm:pt-16 pb-10 sm:pb-20 relative flex sm:flex-row flex-col-reverse items-center mt-5 rounded-4xl sm:rounded-2xl px-5 sm:px-10">
                <div className="sm:max-w-[50%] w-full flex flex-col gap-3 text-center sm:text-left">
                  <h2 className="text-[14px]">Welcome to GreenShop</h2>
                  <h3 className="text-[19px] sm:text-[35px] md:text-[70px] leading-7 sm:leading-[1.2] uppercase font-bold">
                    Let’s Make a Better{" "}
                    <span className="text-[#46A358]">Planet</span>
                  </h3>
                  <p className="text-[#727272] max-w-[530px] hidden sm:block">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create a unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <p className="text-[#727272] max-w-[530px] sm:hidden text-[14px]">
                    We are an online plant shop offering a wide range
                  </p>
                  <div className="mt-7 flex justify-center gap-2 sm:justify-start">
                    <Button
                      type="primary"
                      className="!bg-[#46A358] hidden !text-[14px] sm:!text-[16px] sm:flex !py-5 !max-w-[140px] !w-full !font-bold"
                    >
                      SHOP NOW
                    </Button>
                    <Link
                      to={"#"}
                      className="text-[#46A358] !text-[14px] sm:!text-[16px] sm:hidden flex items-center gap-1"
                    >
                      SHOP NOW <ArrowRightOutlined className="text-[#46A358]" />
                    </Link>
                  </div>
                </div>

                <div className="relative sm:absolute sm:right-0 flex justify-center mt-5 sm:mt-0">
                  <div className="relative">
                    <div className="absolute bottom-4 left-5 sm:bottom-9 sm:left-10">
                      <img
                        className="w-[50%] lg:w-full"
                        src={showcaseImgChild}
                        alt=""
                      />
                    </div>
                    <img
                      className="w-[220px] sm:w-[400px] lg:w-full"
                      src={showcaseImg}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Showcase;
