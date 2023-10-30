import { Button, Typography } from '@mui/material';

import clsx from 'clsx';

import { ReactComponent as ArrowDownIcon } from '../../../../../assets/arrow-down-icon.svg';
import { ReactComponent as LocationIcon } from '../../../../../assets/location-icon.svg';
import { MenuItem, placeOfOriginClasses, PlaceOfOriginList } from './styles';
import usePlaceOfOrigin from './vm';

export interface PlaceOfOriginProps {
  className?: string;
}

const PlaceOfOrigin = ({ className }: PlaceOfOriginProps) => {
  const { placeOfOrigin, anchorEl, open, handleClick, handleSelect, handleClose } = usePlaceOfOrigin();

  return (
    <div className={className}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<LocationIcon />}
        endIcon={<ArrowDownIcon />}
        onClick={handleClick}
        fullWidth
      >
        <Typography variant="body2" mr="auto">
          {placeOfOrigin}
        </Typography>
      </Button>
      <PlaceOfOriginList anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={handleSelect('all')}
          className={clsx({ [placeOfOriginClasses.selectedPlaceOfOrigin]: placeOfOrigin === 'all' })}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={handleSelect('france')}
          className={clsx({ [placeOfOriginClasses.selectedPlaceOfOrigin]: placeOfOrigin === 'france' })}
        >
          France
        </MenuItem>
      </PlaceOfOriginList>
    </div>
  );
};

export default PlaceOfOrigin;
