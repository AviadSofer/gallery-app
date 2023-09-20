import { Image } from "../types/image";

interface GetImagesArgs {
  page?: number;
  limit?: number;
}

const getImages = async (getImagesArgs: GetImagesArgs) => {
  const page = getImagesArgs.page || 1;
  const limit = getImagesArgs.limit || 30;

  return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, {
    method: "GET",
  }).then((res) => res.json().then((data) => data as Image[]));
};

export default getImages;
