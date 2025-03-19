import UseQueryHandler from "../../../hooks/useQuery";

const Discount = () => {
  const { data } = UseQueryHandler({
    url: "features/discount",
    pathname: "discount",
  });

  return (
    <div className="mt-7 bg-[#eef7f1] px-4 py-5">
      <h2 className="text-[#46A358] text-center text-[33px] sm:text-[33px] font-bold">
        {data?.title}
      </h2>
      <h2 className="text-[#3D3D3D] text-[18px] text-center sm:text-[23px] font-bold">
        UP TO{data?.discoount_up_to}% OF
      </h2>
      <img src={data?.poster_image_url} alt="" />
    </div>
  );
};

export default Discount;
