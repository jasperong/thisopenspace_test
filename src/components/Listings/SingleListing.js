import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const SingleListing = ({ listing }) => (
  <div className="single-card">
    <img src={listing.primary_photo_css_url_small} className="single-card__image" alt="listing" />
    <div className="single-card__details">
      <h4 className="single-card__title">{listing.name}</h4>
      <hr className="separator" />
      <div className="single-card__info">
        <p>
          <FontAwesomeIcon fixedWidth icon="map-marker" /> {listing.address} -{' '}
          {listing.square_footage} ft&sup2;
        </p>
        <p>
          <FontAwesomeIcon fixedWidth icon="money-bill" /> $ {listing.hourly_price}/hr | ${' '}
          {listing.daily_price}/day
        </p>
        <p>
          <FontAwesomeIcon fixedWidth icon="users" /> {listing.capacity}
        </p>
        <p>
          <FontAwesomeIcon fixedWidth icon="eye" /> {listing.views_count}
        </p>
      </div>
    </div>
  </div>
);

export default SingleListing;
