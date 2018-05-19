import React, { Component } from 'react';

import Layout from './Layout';
import Listings from './Listings';
import { fetchPage } from '../request';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      endReached: false,
      isLoading: false,
      listings: []
    };
  }

  componentDidMount() {
    this.handleFetchPage();
  }

  handleFetchPage = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    fetchPage(page)
      .then(res => this.handleReceiveResult(res))
      .then(() => this.handleFinishLoading())
      .catch(() => this.handleEndReached());
  };

  handleReceiveResult = async res =>
    this.setState({
      listings: [...this.state.listings, ...res.data]
    });

  handleFinishLoading = () =>
    this.setState({
      page: this.state.page + 1,
      isLoading: false
    });

  handleEndReached = () => this.setState({ endReached: true });

  render() {
    const { isLoading, listings } = this.state;
    return (
      <Layout>
        <Listings
          listings={listings}
          handleFetchPage={this.handleFetchPage}
          isLoading={isLoading}
        />
        <button onClick={this.handleFetchPage}>next</button>
      </Layout>
    );
  }
}

export default App;
