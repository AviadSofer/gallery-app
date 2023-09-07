import { useEffect, useState } from "react";
import { Image } from "./types/image";
import Images from "./components/Images";
import DateNav from "./components/DateNav";
import getImages from "./api/getImages";
import getPageByDate from "./helpers/getPageByDate";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      // Calc page by today
      const today = new Date();
      const page = getPageByDate(today);

      // Fetch init images
      setLoading(true);
      const images = await getImages({ page });
      setLoading(false);

      // Update states
      setImages(images);
      setPage(page + 1);
    })();
  }, []);

  const provider = { images, setImages, loading, setLoading, page, setPage };

  return (
    <div className="w-full min-h-screen px-4 md:px-10 py-8 bg-[#adad85]">
      <div className="w-full fixed top-0 z-50 left-0">
        <DateNav {...provider} />
      </div>

      <div className="w-full pt-12">
        <Images {...provider} />
      </div>

      <div className="pt-8">{loading && <Loading />}</div>
    </div>
  );
};

export default App;
