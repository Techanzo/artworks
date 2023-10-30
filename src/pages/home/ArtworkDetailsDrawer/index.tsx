import ChevronIcon from '@mui/icons-material/ExpandMore';
import { Divider, Typography, useMediaQuery } from '@mui/material';

import { Artwork } from '../../../api/types';
import DrawerBackground from '../../../assets/drawer-background.png';
import { forLargerThanOrEqualToBigTablet, forSmallerThanBigTablet } from '../../../utils/media-queries';
import Painting from '../Painting';
import Cell from './Cell';
import {
  artworkDetailsDrawerClasses,
  BackgroundImage,
  CloseButton,
  Content,
  Drawer,
  PaintingDimensionGrid,
} from './styles';
import UseArtworkDetailsDrawer from './vm';
import XAxisDimension from './XAxisDimension';
import YAxisDimension from './YAxisDimension';

export interface ArtworkDetailsDrawerProps {
  open: boolean;
  onClose: () => void;
  artwork: Artwork | null;
}

const ArtworkDetailsDrawer = ({ open, onClose, artwork }: ArtworkDetailsDrawerProps) => {
  const isSmallerThanBigTablet = useMediaQuery(forSmallerThanBigTablet);
  const isLargerThanOrEqualToBigTablet = useMediaQuery(forLargerThanOrEqualToBigTablet);

  const { isLoading, currentArtwork } = UseArtworkDetailsDrawer(artwork);

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <BackgroundImage src={DrawerBackground} alt="" />
      <CloseButton onClick={onClose}>
        <ChevronIcon />
      </CloseButton>
      <Content>
        {currentArtwork && (
          <>
            {isSmallerThanBigTablet && (
              <Typography variant="h2" component="h1" mb={4}>
                {currentArtwork.title}
              </Typography>
            )}
            <PaintingDimensionGrid>
              <YAxisDimension
                cm={currentArtwork.dimensionDetails?.heightCm ?? 0}
                inch={currentArtwork.dimensionDetails?.heightInch ?? 0}
                className={artworkDetailsDrawerClasses.yAxis}
                isLoading={isLoading}
              />
              <Painting
                thumbnail={currentArtwork.thumbnail}
                image={currentArtwork.image}
                className={artworkDetailsDrawerClasses.painting}
              />
              <XAxisDimension
                cm={currentArtwork.dimensionDetails?.widthCm ?? 0}
                inch={currentArtwork.dimensionDetails?.widthInch ?? 0}
                className={artworkDetailsDrawerClasses.xAxis}
                isLoading={isLoading}
              />
            </PaintingDimensionGrid>
            <div className={artworkDetailsDrawerClasses.info}>
              {isLargerThanOrEqualToBigTablet && (
                <Typography variant="h2" component="h1" mb={4}>
                  {currentArtwork.title}
                </Typography>
              )}

              <Cell isLoading={isLoading} label="Type :" value={currentArtwork.mediumDisplay} />

              <Cell isLoading={isLoading} label="Artist :" value={currentArtwork.artistDisplay} />

              <Cell isLoading={isLoading} label="Place of origin :" value={currentArtwork.placeOfOrigin} />

              <Cell isLoading={isLoading} label="Size :" value={currentArtwork.dimensions} />

              <Cell isLoading={isLoading} label="Copyright :" value={currentArtwork.copyrightNotice} />
              <Divider />

              <Cell
                isLoading={isLoading}
                label="Description :"
                html={currentArtwork.description?.replace(/\n/, '<br />')}
                direction="column"
              />
            </div>
          </>
        )}
      </Content>
    </Drawer>
  );
};

export default ArtworkDetailsDrawer;
