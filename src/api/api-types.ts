import { Artwork, ArtworkDetails } from './types';

export interface SearchArtworksRequest {
  /** @default 1 */
  page?: number;
  /** @default 10 */
  limit?: number;
  /** @default '' */
  query?: string;
  placeOfOrigin?: string;
}

export interface SearchArtworksResponse {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
  };
  data: {
    /** we do not know what score is - and we do not care */
    _score: number;
    id: number;
    /** api url for fetching more data about this artwork */
    api_link: string;
    title: string;
    description: string | null;
    /**
     * thumbnail of image (very low quality for faster loading)
     */
    thumbnail: {
      /** base64 string */
      lqip: string;
      width: number;
      height: number;
      alt_text: string;
    } | null;
    /** id of the actual high definition image to be used with config.iiif_url to render as image */
    image_id: string | null;
    place_of_origin: string | null;
  }[];
  config: {
    /** high definition image base url */
    iiif_url: string;
    website_url: string;
  };
}

export interface SearchArtworksTransformedResponse {
  pagination: {
    total: number;
    limit: number;
    page: number;
  };
  artworks: Artwork[];
}

export interface GetArtworkDetailsRequest {
  id: number;
}

export interface GetArtworkDetailsResponse {
  data: {
    id: number;
    title: string;
    /** rich-text using basic html tags  */
    description: string | null;
    place_of_origin: string;
    /**
     * name of artist and infomation
     * @example - Archibald John Motley Jr. (American, 1891–1981)
     * @example - Richard Hunt American, born 1935
     * @example - Aztec (Mexica) Tenochtitlan, Mexico
     * @example - Joan Mitchell American, 1925-1992
     */
    artist_display: string;
    /**
     * thumbnail of image (very low quality for faster loading)
     */
    thumbnail: {
      /** base64 string */
      lqip: string;
      width: number;
      height: number;
      alt_text: string;
    } | null;
    /** id of the actual high definition image to be used with config.iiif_url to render as image */
    image_id: string | null;
    /** name of artist */
    artist_title: string;
    /** rich-text using basic html tags  */
    publication_history: string | null;
    /** rich-text using basic html tags  */
    exhibition_history: string | null;
    /**
     * dimensions of artwork in centimeter and inch
     * @example 212.2 × 276.2 cm (83 1/2 × 108 3/4 in.)
     */
    dimensions: string;
    dimensions_detail: [
      {
        depth_cm: number;
        depth_in: number;
        width_cm: number;
        width_in: number;
        height_cm: number;
        height_in: number;
        diameter_cm: number;
        diameter_in: number;
        clarification: null;
      },
    ];
    /** artwork medium */
    medium_display: string;
    copyright_notice: string | null;
  };
  config: {
    /** high definition image base url */
    iiif_url: string;
    website_url: string;
  };
}

export interface GetArtworkDetailsTransformedResponse extends ArtworkDetails {}
