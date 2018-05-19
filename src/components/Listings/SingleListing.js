import React from 'react';

const SingleListing = ({ listing }) => (
  <div className="single-listing__container">
    <img src={listing.primary_photo_css_url_small} alt="listing" />
    <p>{listing.address}</p>
    <p>{listing.capacity}</p>
    <p>{listing.daily_price}</p>
    <p>{listing.hourly_price}</p>
    <p>{listing.square_footage}</p>
    <p>{listing.views_count}</p>
  </div>
);

export default SingleListing;
