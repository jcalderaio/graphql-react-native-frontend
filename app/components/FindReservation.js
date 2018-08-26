import React from 'react';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Text,
  View,
  Card,
  CardItem,
  Grid,
  Row,
  Col
} from 'native-base';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
//All Reservations
function FindReservation({ data: { loading, reservations } }) {
  if (loading) {
    return <Text style={styles.outer}>Loading...</Text>;
  } else {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>Find Reservation</Title>
          </Body>
        </Header>
        <Content>
          <Text>Find Reservation</Text>
        </Content>
      </Container>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (AllReservations here)
export default graphql(gql`
  query findReservation {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`)(FindReservation);

const styles = {
  outer: {
    paddingTop: 32,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    backgroundColor: 'red'
  },
  headerText: {
    color: 'white'
  },
  gridStyle: {
    justifyContent: 'center'
  }
};
