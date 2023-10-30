import { omit, pick } from '../utils/object';
import { snakeKeysToCamelCase } from '../utils/object';
import {
  GetArtworkDetailsRequest,
  GetArtworkDetailsResponse,
  GetArtworkDetailsTransformedResponse,
  SearchArtworksRequest,
  SearchArtworksResponse,
  SearchArtworksTransformedResponse,
} from './api-types';
import request from './request';
import { urls } from './urls';

export async function searchArtworks(
  payload: SearchArtworksRequest = {}
): Promise<SearchArtworksTransformedResponse> {
  const response = await request.get<SearchArtworksResponse>(urls.searchArtworks(payload));
  const data = response.data;

  const transformedResponse: SearchArtworksTransformedResponse = {
    pagination: {
      ...pick(data.pagination, 'limit', 'total'),
      page: data.pagination.current_page,
    },
    artworks: data.data.map((artwork, index) => ({
      ...snakeKeysToCamelCase(omit(artwork, '_score')),
      thumbnail: artwork.thumbnail
        ? {
            ...pick(artwork.thumbnail, 'height', 'width'),
            url: artwork.thumbnail.lqip,
            alt: artwork.thumbnail.alt_text,
          }
        : null,
      image: artwork.image_id ? `${data.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg` : null,
      placeOfOrigin: artwork.place_of_origin ?? 'Unknown',
    })),
  };

  return transformedResponse;
}

export async function getArtworkDetails(
  payload: GetArtworkDetailsRequest
): Promise<GetArtworkDetailsTransformedResponse> {
  const response = await request.get<GetArtworkDetailsResponse>(urls.getArtworkDetails(payload));
  const data = response.data;

  const transformedResponse: GetArtworkDetailsTransformedResponse = {
    ...snakeKeysToCamelCase(
      pick(
        data.data,
        'id',
        'title',
        'place_of_origin',
        'artist_display',
        'description',
        'publication_history',
        'exhibition_history',
        'dimensions',
        'copyright_notice',
        'medium_display'
      )
    ),
    thumbnail: data.data.thumbnail
      ? {
          ...pick(data.data.thumbnail, 'height', 'width'),
          url: data.data.thumbnail.lqip,
          alt: data.data.thumbnail.alt_text,
        }
      : null,
    image: data.data.image_id
      ? `${data.config.iiif_url}/${data.data.image_id}/full/843,/0/default.jpg`
      : null,
    dimensionDetails: data.data.dimensions_detail[0]
      ? {
          widthCm: data.data.dimensions_detail[0].width_cm,
          widthInch: data.data.dimensions_detail[0].width_in,
          heightCm: data.data.dimensions_detail[0].height_cm,
          heightInch: data.data.dimensions_detail[0].height_in,
        }
      : null,
  };

  return transformedResponse;
}
