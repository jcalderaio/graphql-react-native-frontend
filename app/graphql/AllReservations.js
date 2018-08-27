import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  List,
  Text,
  Card,
  CardItem,
  Grid
} from 'native-base';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
//All Reservations
export default () => (
  <Query query={GET_RESERVATIONS}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <Container>
            <Header style={styles.header}>
              <Body>
                <Title style={styles.headerText}>All Reservations</Title>
              </Body>
            </Header>
            <Content contentContainerStyle={styles.centerContainter}>
              <Text style={{ justifyContent: 'center' }}>Loading...</Text>
            </Content>
          </Container>
        );
      }

      if (error) {
        return (
          <Container>
            <Header style={styles.header}>
              <Body>
                <Title style={styles.headerText}>All Reservations</Title>
              </Body>
            </Header>
            <Content contentContainerStyle={styles.centerContainter}>
              <Text style={{ justifyContent: 'center' }}>
                Error! {error.message}
              </Text>
            </Content>
          </Container>
        );
      }

      return (
        <Container>
          <Header style={styles.header}>
            <Body>
              <Title style={styles.headerText}>All Reservations</Title>
            </Body>
          </Header>
          <Content>
            {data.reservations.length > 0 && (
              <List>
                {data.reservations.map(res => (
                  <Card key={res.id}>
                    <CardItem header bordered>
                      <Grid style={styles.gridStyle}>
                        <Text>Reservation ID: {res.id}</Text>
                      </Grid>
                    </CardItem>
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
            {data.reservations.length <= 0 && (
              <Grid style={styles.gridStyle}>
                <Text>No Reservations to Show</Text>
              </Grid>
            )}
          </Content>
        </Container>
      );
    }}
  </Query>
);

const GET_RESERVATIONS = gql`
  query getAllReservations {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

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
  },
  centerContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
