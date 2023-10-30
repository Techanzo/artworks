import clsx from 'clsx';

import { ArtworkThumbnail } from '../../../api/types';
import noImageAvailable from '../../../assets/no-image-available.png';
import { Image, paintingClasses, Root } from './styles';
import usePainting from './vm';

export interface PaintingProps {
  /** base64 low resolution image */
  thumbnail: ArtworkThumbnail | null;
  /** high resolution image */
  image: string | null;
  className?: string;
}

const Painting = ({ thumbnail, image, className }: PaintingProps) => {
  const { isHDImageLoaded, handleHDImageLoaded } = usePainting();

  if (!thumbnail || !image) {
    return (
      <Root className={className}>
        <Image src={noImageAvailable} />
      </Root>
    );
  }

  return (
    <Root className={className}>
      <Image src={image} alt={thumbnail.alt} onLoad={handleHDImageLoaded} />
      {!isHDImageLoaded && (
        <Image
          src={thumbnail.url}
          alt={thumbnail.alt}
          className={clsx({
            [paintingClasses.fullHeightThumbnail]: thumbnail.height >= thumbnail.width,
            [paintingClasses.fullWidthThumbnail]: thumbnail.width >= thumbnail.height,
          })}
          sx={{ aspectRatio: thumbnail.width / thumbnail.height }}
        />
      )}
    </Root>
  );
};

export default Painting;
