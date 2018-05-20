import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Layout from './Layout';
import Listings from './Listings';
import { fetchPage } from '../request';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      endReached: false,
      isLoading: false,
      listings: []
    };
  }

  componentDidMount() {
    this.handleFetchPage();
  }

  handleFetchPage = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });
    fetchPage(currentPage + 1)
      .then(res => this.handleReceiveResult(res))
      .then(() => this.handleFinishLoading())
      .catch(() => this.handleEndReached());
  };

  handleReceiveResult = res =>
    this.setState({
      listings: [...this.state.listings, ...res.data]
    });

  handleFinishLoading = () =>
    this.setState({
      currentPage: this.state.currentPage + 1,
      isLoading: false
    });

  handleEndReached = () => this.setState({ endReached: true });

  render() {
    const { currentPage, endReached, isLoading, listings } = this.state;
    return (
      <Layout>
        <Listings
          currentPage={currentPage}
          endReached={endReached}
          listings={listings}
          handleFetchPage={this.handleFetchPage}
          isLoading={isLoading}
        />
        {isLoading && !endReached ? <FontAwesomeIcon icon="spinner" spin pulse size="3x" /> : null}
        {endReached ? <p>The End</p> : null}
      </Layout>
    );
  }
}

export default App;
