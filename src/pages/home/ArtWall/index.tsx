import InfiniteScroll from '../../../components/InfiniteScroll';
import Artwork from '../Artwork';
import ArtworkDetailsDrawer from '../ArtworkDetailsDrawer';
import { Grid } from './styles';
import useArtWall from './vm';

const ArtWall = () => {
  const {
    isLoading,
    artworks,
    total,
    page,
    limit,
    fetchItems,
    searchTerm,
    selectedArtwork,
    handleClickArtwork,
    handleCloseArtworkDetailsDrawer,
  } = useArtWall();

  return (
    <>
      <InfiniteScroll
        isLoading={isLoading}
        numItems={artworks.length}
        total={total}
        page={page}
        limit={limit}
        fetchItems={fetchItems}
      >
        <Grid>
          {artworks.map((artwork) => (
            <Artwork
              key={artwork.id}
              artwork={artwork}
              searchTerm={searchTerm}
              onClick={handleClickArtwork(artwork)}
            />
          ))}
        </Grid>
      </InfiniteScroll>
      <ArtworkDetailsDrawer
        open={Boolean(selectedArtwork)}
        onClose={handleCloseArtworkDetailsDrawer}
        artwork={selectedArtwork}
      />
    </>
  );
};

export default ArtWall;
