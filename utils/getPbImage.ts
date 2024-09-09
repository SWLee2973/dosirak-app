const PB_URL = process.env.EXPO_PUBLIC_PB_URL;

type TSingleImageProps = {
  collectionId: string;
  id: string;
  thumbnail: string;
};

type TMultipleImageProps = {
  collectionId: string;
  id: string;
  images: string[];
};

export default function getPbImage({
  collectionId,
  id,
  thumbnail,
}: TSingleImageProps) {
  if (!thumbnail) return undefined;
  return `${PB_URL}/api/files/${collectionId}/${id}/${thumbnail}`;
}

export function getPbImageArray({
  collectionId,
  id,
  images,
}: TMultipleImageProps) {
  return images.map(
    (image) => `${PB_URL}/api/files/${collectionId}/${id}/${image}`,
  );
}
