import { Button } from "antd";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { setModalAuthorizationVisibility } from "../../../redux/modal-slice";

const BlogHeader = () => {
  const dispatch = useReduxDispatch();
  return (
    <div>
      <div className="w-full h-[300px] p-[50px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[200px] max-md:h-[150px] justify-between">
        <img
          className="w-[150px] h-full"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_1.png?alt=media&token=8174091c-24b5-42a0-886d-845bd15cccb9"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_2.png?alt=media&token=d2b8bf6f-7c67-4e93-b026-917f4291d9f6"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[50px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_3.png?alt=media&token=7abda4b5-0f9e-4fc1-8353-e32194b925c9"
          alt=""
        />
        <img
          className="w-[150px] h-full mt-[20px]"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_4.png?alt=media&token=2a9f4b03-30a0-4c89-b189-7c8835ab42e7"
          alt=""
        />
        <img
          className="w-[150px] h-ful"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fblog_avatar_5.png?alt=media&token=f65d9df1-ea8b-4ebe-9d23-e3e768f0f701"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 sm:gap-7">
        <div className="flex justify-center items-center">
          <h3 className="text-[22px] font-bold max-w-[700px] text-center  sm:text-[30px] md:text-[60px]">
            Monetize your content with{" "}
            <span className="text-[#45a358]">GreenShop</span>
          </h3>
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-center text-gray-700  max-w-[750px]">
            Greenshop - a platform for buying and selling, publishing and
            monetizing all types of flowers: articles, notes, video, photos,
            podcasts or songs.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            className="!bg-[#45a358] text-white "
            size="large"
            type="primary"
            onClick={() => dispatch(setModalAuthorizationVisibility())}
          >
            Join Greenshop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
