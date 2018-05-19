import React from 'react';

import SingleListing from './SingleListing';
import withInfiniteScroll from './withInfiniteScroll';

const Listings = ({ listings = [] }) =>
  listings.map(listing => <SingleListing key={listing.id} listing={listing} />);

export default withInfiniteScroll(Listings);
