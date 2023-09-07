import DatePicker from "./DatePicker";
import { ProviderProps } from "../types/providerProps";
import getImages from "../api/getImages";
import getPageByDate from "../helpers/getPageByDate";

const DateNav: React.FC<ProviderProps> = ({
  setImages,
  setLoading,
  setPage,
}) => {
  const onChangeHandle = async (date: Date) => {
    // Reset
    setImages([]);

    // Calc page
    const page = getPageByDate(date);

    // Fetch updeted images
    setLoading(true);
    const images = await getImages({ page });

    // Update states
    setImages(images);
    setPage(page + 1);

    // After fetch, scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setLoading(false); // Change loading to false, (=enable scroll listener) after a delay
    }, 1000);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-b-[15px]">
        <DatePicker onChange={onChangeHandle} />
      </div>
    </div>
  );
};

export default DateNav;
