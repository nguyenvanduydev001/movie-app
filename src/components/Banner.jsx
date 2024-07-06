import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30"></div>
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-200 py-3 px-7 text-xl rounded">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="ratinghalf" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Nghe nói em thích tôi là một bộ phim về cuộc sống và tình yêu,
              mang đậm tinh thần của ngành công nghiệp in ấn và dàn trang. Bộ
              phim kể câu chuyện về sự phát triển của Lorem Ipsum, từ khi nó trở
              thành văn bản mẫu chuẩn kể từ những năm 1500, khi một người in ấn
              không rõ danh tính đã sử dụng nó như một mẫu văn bản để trình diễn
              loại chữ. Bộ phim mang lại cho khán giả cảm giác như đã trải qua
              năm thế kỷ, cùng với sự chuyển mình vào dàn trang điện tử.
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white bg-black font-bold text-lg rounded">
                Chi tiết
              </button>
              <button className="p-3 text-white bg-red-500 font-bold text-lg rounded">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover rounded"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={IconPlay}
                alt="Play"
                className="w-16 h-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
