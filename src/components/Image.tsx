import { useState } from "react";

interface ImageProps {
  src?: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const onLoadHandle = () => setLoading(false);

  return (
    <>
      {loading && <div className="h-full w-full animate-pulse bg-gray-300" />}

      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={onLoadHandle}
          className="h-full w-full object-cover"
        />
      )}
    </>
  );
};

export default Image;
