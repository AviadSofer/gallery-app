import { useEffect, useState } from "react";
import { Image } from "./types/image";
import Images from "./components/Images";
import DateNav from "./components/DateNav";
import getImages from "./api/getImages";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Init on start
  useEffect(() => {
    (async () => {
      const images = await getImages({});
      setImages(images);

      setPage(page + 1);
    })();
  }, []);

  const provider = { images, setImages, loading, setLoading, page, setPage };

  return (
    <div className="w-full min-h-screen px-10 py-8 bg-[#adad85]">
      <div className="w-full fixed top-0 z-50 left-0">
        <DateNav {...provider} />
      </div>

      <div className="w-full pt-12">
        <Images {...provider} />
      </div>
    </div>
  );
};

export default App;
