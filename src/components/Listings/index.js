import React from 'react';

import SingleListing from './SingleListing';
import withInfiniteScroll from './withInfiniteScroll';

import './index.css';

const Listings = ({ endReached, listings = [], handleFetchPage }) => (
  <div className="listings__container" id="list">
    {listings.map(listing => <SingleListing key={listing.id} listing={listing} />)}
  </div>
);

export default withInfiniteScroll(Listings);
