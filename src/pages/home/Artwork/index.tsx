import { MouseEventHandler } from 'react';

import { Typography } from '@mui/material';

import { Artwork as ArtworkType } from '../../../api/types';
import { ReactComponent as LocationIcon } from '../../../assets/location-icon.svg';
import Highlight from '../../../components/Highlight';
import Painting from '../Painting';
import { LeftRevets, NamePlate, NamePlateBorder, PlaceOfOrigin, RightRevets, Root, Title } from './styles';

export interface ArtworkProps {
  artwork: ArtworkType;
  searchTerm: string;
  onClick: MouseEventHandler;
}

const Artwork = ({ artwork, searchTerm, onClick }: ArtworkProps) => {
  return (
    <Root onClick={onClick}>
      <PlaceOfOrigin>
        <LocationIcon height={16} width={16} color="inherit" />
        <Typography variant="body2" lineHeight="1" color="inherit">
          {artwork.placeOfOrigin}
        </Typography>
      </PlaceOfOrigin>
      <Painting thumbnail={artwork.thumbnail} image={artwork.image} />
      <NamePlateBorder>
        <NamePlate>
          <Title>
            <Highlight search={searchTerm}>{artwork.title}</Highlight>
          </Title>
          <LeftRevets />
          <RightRevets />
        </NamePlate>
      </NamePlateBorder>
    </Root>
  );
};

export default Artwork;
