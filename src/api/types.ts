export interface ArtworkThumbnail {
  /**
   * type: base64 image
   * server linking: url = thumbnail.lqip
   */
  url: string;
  height: number;
  width: number;
  alt: string;
}

export interface Artwork {
  id: number;
  title: string;
  /** thumbnail of image (very low quality for faster loading) */
  thumbnail: ArtworkThumbnail | null;
  /**
   * high definition image
   * type: url
   * server linking: image = config.iiif_url + / + image_idˀ
   */
  image: string | null;
  placeOfOrigin: string;
}

export type PlaceOfOrigin = 'all' | 'france';

export interface ArtworkDetails extends Artwork {
  /** name of artist */
  artistDisplay: string;
  /** rich-text using basic html tags  */
  description: string | null;
  /** rich-text using basic html tags  */
  publicationHistory: string | null;
  /** rich-text using basic html tags  */
  exhibitionHistory: string | null;
  /**
   * dimensions of artwork in centimeter and inch
   * @example 212.2 × 276.2 cm (83 1/2 × 108 3/4 in.)
   */
  dimensions: string;
  dimensionDetails: {
    widthCm: number;
    widthInch: number;
    heightCm: number;
    heightInch: number;
  } | null;
  copyrightNotice: string | null;
  /** artwork medium */
  mediumDisplay: string;
}
