import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { getArtworkDetails } from '../../../api';
import { Artwork, ArtworkDetails } from '../../../api/types';

const UseArtworkDetailsDrawer = (artwork: Artwork | null) => {
  const [currentArtwork, setCurrentArtwork] = useState<ArtworkDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function init() {
      setIsLoading(true);

      if (!artwork) {
        setCurrentArtwork(null);
        setIsLoading(false);
        return;
      }

      setCurrentArtwork({
        ...artwork,
        artistDisplay: '',
        copyrightNotice: null,
        description: null,
        dimensions: '',
        dimensionDetails: {
          widthCm: 0,
          widthInch: 0,
          heightCm: 0,
          heightInch: 0,
        },
        exhibitionHistory: null,
        mediumDisplay: '',
        publicationHistory: null,
      });

      getArtworkDetails({ id: artwork.id })
        .then((response) => {
          setCurrentArtwork(response);
        })
        .catch((error) => {
          toast.error(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [artwork]
  );
  return { isLoading, currentArtwork };
};
export default UseArtworkDetailsDrawer;
