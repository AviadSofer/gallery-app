import { Image } from "./image";

interface ProviderProps {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type { ProviderProps };
