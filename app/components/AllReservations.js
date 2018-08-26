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
function AllReservations({ data: { loading, reservations } }) {
  if (loading) {
    return <Text style={styles.outer}>Loading...</Text>;
  } else {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>All Reservations</Title>
          </Body>
        </Header>
        <Content>
          {reservations.length > 0 && (
            <List>
              {reservations.map(res => (
                <Card key={res.id}>
                  <CardItem bordered>
                    <Grid style={styles.gridStyle}>
                      <Text>Name on Reservation: {res.name}</Text>
                    </Grid>
                  </CardItem>
                  <CardItem bordered>
                    <Grid style={styles.gridStyle}>
                      <Text>Hotel: {res.hotelName}</Text>
                    </Grid>
                  </CardItem>
                  <CardItem bordered>
                    <Grid style={styles.gridStyle}>
                      <Text>Check-In Date: {res.arrivalDate}</Text>
                    </Grid>
                  </CardItem>
                  <CardItem bordered>
                    <Grid style={styles.gridStyle}>
                      <Text>Check-Out Date: {res.departureDate}</Text>
                    </Grid>
                  </CardItem>
                </Card>
              ))}
            </List>
          )}
          {reservations.length <= 0 && (
            <Grid style={styles.gridStyle}>
              <Text>No Reservations to Show</Text>
            </Grid>
          )}
        </Content>
      </Container>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (AllReservations here)
export default graphql(gql`
  query allReservations {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`)(AllReservations);

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
