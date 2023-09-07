import { useState } from "react";

interface ImageProps {
  src?: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const onLoadHandle = () => setLoading(false);

  return (
    <div className="relative h-full w-full">
      {loading && (
        <div className="h-full absolute top-0 w-full animate-pulse bg-gray-300" />
      )}

      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={onLoadHandle}
          className={`${loading && "opacity-0"} h-full w-full object-cover`}
        />
      )}
    </div>
  );
};

export default Image;
