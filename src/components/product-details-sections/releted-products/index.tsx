import { Swiper, SwiperSlide } from "swiper/react";
import UseQueryHandler from "../../../hooks/useQuery";
import { Autoplay, Pagination } from "swiper/modules";
import { CardProductsType } from "../../../@types";
import { Card, Skeleton } from "antd";

const ReletedProducts = () => {
  const { data, isPending, isError } = UseQueryHandler({
    url: "flower/category/accessories",
    pathname: "product-details",
  });
  return (
    <div className="py-5 sm:py-10">
      <div className="containerr">
        <h3 className="text-[#46A358] font-bold border-b-2 border-[#46A358] pb-2 mb-5">
          Releted Products{" "}
        </h3>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {isPending || isError
            ? [...Array(5)].map((_, id) => (
                <SwiperSlide key={id}>
                  <Card
                    className="shadow-lg rounded-xl"
                    cover={
                      <Skeleton.Image
                        active
                        className="!w-full !h-[230px] sm:!h-[250px] md:!h-[270px] rounded-xl"
                      />
                    }
                  >
                    <Skeleton.Input
                      active
                      className="!w-[150px] !h-[20px] rounded-md"
                    />
                    <Skeleton.Input
                      active
                      className="!w-[80px] !h-[18px] rounded-md"
                    />
                  </Card>
                </SwiperSlide>
              ))
            : data.map((value: CardProductsType) => (
                <SwiperSlide key={value?._id}>
                  <Card className="shadow-lg !max-h-[350px] !object-contain !h-full rounded-xl">
                    <img
                      alt={value?.title}
                      src={value?.main_image}
                      className="object-contain !min-h-[200px] !max-h-[200px] !h-full w-full"
                    />
                    <h3 className="text-gray-800 text-lg mt-2 font-bold">
                      {value.title.length > 20
                        ? `${value?.title.slice(0, 20)}...`
                        : value?.title.slice(0, 20)}
                    </h3>
                    <div className="flex gap-2">
                      <h3 className="text-green-600 font-bold mt-2 text-lg">
                        ${value?.discount_price}
                      </h3>
                      <del>{value.price}</del>
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReletedProducts;
