export const API_BASE_URL = 'https://api.artic.edu/api/v1';

export const urls = {
  searchArtworks: ({
    page,
    limit,
    query,
    placeOfOrigin,
  }: { page?: number; limit?: number; query?: string; placeOfOrigin?: string } = {}) => {
    const queryStringParams = ['fields=id,api_link,title,description,thumbnail,image_id,place_of_origin'];

    if (page) queryStringParams.push(`page=${page}`);
    if (limit) queryStringParams.push(`limit=${limit}`);
    if (query) queryStringParams.push(`query[bool][must][0][term][title]=${encodeURIComponent(query)}`);
    if (placeOfOrigin) {
      queryStringParams.push(`query[bool][filter][0][match][place_of_origin]=${placeOfOrigin}`);
    }

    // TODO: remove this once I get some answer from stack-overflow
    // if (query) queryStringParams.push(`query[term][title]=${query}`);
    // if (placeOfOrigin) queryStringParams.push(`query[match][place_of_origin]=${placeOfOrigin}`);

    const queryString = queryStringParams.join('&');

    return `/artworks/search?${queryString}`;
  },
  getArtworkDetails: ({ id }: { id: number }) => `https://api.artic.edu/api/v1/artworks/${id}`,
};
