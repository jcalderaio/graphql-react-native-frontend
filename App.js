import React, { Component } from 'react';
import Expo from 'expo'; // Constants for Android status bar
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { AsyncStorage } from 'react-native';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Tabs from './app/Tabs';

// use local router IP so you can test on the same wifi from a real device.
const httpLink = new HttpLink({ uri: 'http://localhost:7700/graphql' });

let token;

const withToken = setContext(async request => {
  if (!token) {
    token = await AsyncStorage.getItem('token');
  }
  return {
    headers: {
      authorization: token
    }
  };
});

const resetToken = onError(({ networkError }) => {
  if (networkError && networkError.statusCode === 401) {
    // remove cached token on 401 from the server
    token = undefined;
  }
});

const authFlowLink = withToken.concat(resetToken);

const link = authFlowLink.concat(httpLink);

const cache = new InMemoryCache();

export default class App extends Component {
  constructor(...args) {
    super(...args);

    this.client = new ApolloClient({
      link,
      cache,
      connectToDevTools: true
    });

    this.state = {
      isReady: false // Need for NativeBase + Android
    };
  }

  async componentWillMount() {
    // Need for NativeBase + Android
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });

    // Need for NativeBase + Android
    this.setState({
      isReady: true
    });
  }

  render() {
    // Need for NativeBase + Android
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    // Allows the status bar to fit on Android screens
    return (
      <ApolloProvider client={this.client}>
        <Tabs />
      </ApolloProvider>
    );
  }
}
