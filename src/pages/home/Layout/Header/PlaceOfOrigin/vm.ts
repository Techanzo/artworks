import { useState } from 'react';

import { PlaceOfOrigin } from '../../../../../api/types';
import { useHomeContext } from '../../../Context';

const usePlaceOfOrigin = () => {
  const { placeOfOrigin, onChangePlaceOfOrigin } = useHomeContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (menuId: PlaceOfOrigin) => () => {
    onChangePlaceOfOrigin(menuId);
    handleClose();
  };

  return { placeOfOrigin, anchorEl, open, handleClick, handleSelect, handleClose };
};

export default usePlaceOfOrigin;
