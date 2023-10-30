import { useState } from 'react';

const usePainting = () => {
  const [isHDImageLoaded, setIsHDImageLoaded] = useState(false);

  const handleHDImageLoaded = () => {
    setIsHDImageLoaded(true);
  };

  return { isHDImageLoaded, handleHDImageLoaded };
};

export default usePainting;
