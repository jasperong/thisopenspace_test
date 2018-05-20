import React from 'react';

import SingleListing from './SingleListing';

const Listings = ({ endReached, listings = [], handleFetchPage }) => (
  <div className="listings__container" id="list">
    {listings.map(listing => <SingleListing key={listing.id} listing={listing} />)}
  </div>
);

export default Listings;
