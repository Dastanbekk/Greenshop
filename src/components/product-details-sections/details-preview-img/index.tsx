import { CardProductsType } from "../../../@types";
import ProductImageSkeleton from "../../../generics/loader/product-details-preview";

const ProductDetailsImgPreview = ({
  data,
  isPending,
  isError,
}: {
  data: CardProductsType;
  isPending: boolean;
  isError: boolean;
}) => {
  return isPending || isError ? (
    <ProductImageSkeleton />
  ) : (
    <div className="flex flex-col-reverse sm:flex-row gap-7">
      <div className="flex sm:flex-col sm:justify-between gap-2">
        {data?.detailed_images?.map((value, idx) => (
          <div key={idx} className="p-3 bg-[#EDF6EF]">
            <img
              className=" w-full h-full max-w-[100px] max-h-[100px]"
              src={value}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="p-3 w-full bg-[#EDF6EF]">
        <img
          className="w-full object-cover  max-h-[490px] h-full"
          src={data?.main_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductDetailsImgPreview;
