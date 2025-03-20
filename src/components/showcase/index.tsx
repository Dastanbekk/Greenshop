import { Button } from "antd";
import showcaseImg from "../../assets/img/showcase.png";
import showcaseImgChild from "../../assets/img/showcaseChild.png";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Showcase: React.FC = () => {
  return (
    <div className="mt-5">
      <div className="containerr">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {[1, 2, 3].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-[#D7EBDB] sm:bg-[#F5F5F580] pt-8 sm:pt-16 pb-10 sm:pb-20 relative flex flex-col-reverse sm:flex-row items-center gap-6 sm:gap-10 rounded-2xl px-5 sm:px-10">
                <div className="w-full sm:w-1/2 flex flex-col gap-3 text-center sm:text-left">
                  <h2 className="text-[14px]">Welcome to GreenShop</h2>
                  <h3 className="text-[22px] leading-7 uppercase sm:leading-[55px] sm:text-[45px] md:text-[55px] font-bold">
                    Let’s Make a Better{" "}
                    <span className="text-[#46A358]">Planet</span>
                  </h3>
                  <p className="hidden sm:block text-[#727272] max-w-[530px]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create a unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <p className="sm:hidden text-[14px] text-[#727272]">
                    We are an online plant shop offering a wide range
                  </p>
                  <div className="mt-4 flex gap-2 justify-center sm:justify-start">
                    <Button
                      type="primary"
                      className="!bg-[#46A358] hidden text-[14px] sm:text-[16px] sm:flex !py-4 !px-6 !font-bold rounded-lg"
                    >
                      SHOP NOW
                    </Button>
                    <Link
                      to={"#"}
                      className="text-[#46A358] text-[14px] sm:text-[16px] sm:hidden flex items-center gap-2"
                    >
                      SHOP NOW <ArrowRightOutlined className="text-[#46A358]" />
                    </Link>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 flex justify-center">
                  <div className="relative w-[250px] sm:w-[350px] lg:w-[450px]">
                    <img src={showcaseImg} className="w-full" alt="" />
                    <img
                      src={showcaseImgChild}
                      className="absolute bottom-2 sm:bottom-5 left-0 w-[50%] sm:w-[200px]"
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
