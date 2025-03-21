import { useParams } from "react-router-dom";
import ProductDetailsInfos from "../details-info";
import ProductDetailsItems from "../details-items";
import ProductDetailsImgPreview from "../details-preview-img";
import ReletedProducts from "../releted-products";
import UseQueryHandler from "../../../hooks/useQuery";

const ProductDetailsChildren = () => {
  const { category, id }: { category?: string; id?: string } = useParams();
  const { data, isPending, isError } = UseQueryHandler({
    pathname: "product-id",
    url: `flower/category/${category}/${id}`,
  });
  console.log(data);


  return (
    <div className="containerr">
      <div className="grid md:grid-cols-2 gap-10 py-5 sm:py-10">
        <ProductDetailsImgPreview data={data} isPending={isPending} isError={isError} />
        <ProductDetailsItems data={data} isPending={isPending} isError={isError} />
      </div>
      <ProductDetailsInfos data={data} />
      <div>
        <ReletedProducts />
      </div>
    </div>
  );
};

export default ProductDetailsChildren;
