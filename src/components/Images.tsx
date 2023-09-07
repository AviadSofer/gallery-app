import Image from "./Image";
import { ProviderProps } from "../types/providerProps";
import { useEffect } from "react";
import getImages from "../api/getImages";

const Images: React.FC<ProviderProps> = ({
  images,
  setImages,
  loading,
  setLoading,
  page,
  setPage,
}) => {
  useEffect(() => {
    const handleScroll = async () => {
      if (loading) return;

      // Calc if it close to the bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const isBottom = scrollTop + windowHeight >= documentHeight - 200;
      if (!isBottom) return;

      // Fetch updeted images
      setLoading(true);
      const images = await getImages({ page });
      setLoading(false);

      // Update states
      setImages((prev) => [...prev, ...images]);
      setPage(page >= 67 ? 1 : page + 1);
    };

    // Trigger on scroll
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, page]);

  return (
    <div className="w-full grid gap-2 bg-white p-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 fhd:grid-cols-5 2k:grid-cols-6 4k:grid-cols-7">
      {images.map(({ download_url, author }, i) => (
        <div key={i} className="w-full aspect-video">
          <Image src={download_url} alt={author} />
        </div>
      ))}
    </div>
  );
};

export default Images;
