import React, { Component } from 'react';

const withInfiniteScroll = ComponentToRender =>
  class WithInfiniteScroll extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
      window.scrollTo(0, 0);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      const { handleFetchPage, isLoading, listings } = this.props;
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
        listings.length &&
        !isLoading
      ) {
        handleFetchPage();
      }
    };

    render() {
      return <ComponentToRender {...this.props} />;
    }
  };

export default withInfiniteScroll;
