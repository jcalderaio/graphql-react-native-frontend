import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { View, Text, Card, CardItem, Grid, Button } from 'native-base';
import { Dimensions } from 'react-native';

const midscreen = Dimensions.get('window').height / 4;

export default ({ reservationId }) => (
  <Query
    query={GET_RESERVATION}
    variables={{ id: reservationId }}
    pollInterval={10}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) {
        return (
          <View style={styles.centerContainter}>
            <Text style={{ justifyContent: 'center', marginTop: midscreen }}>
              Please enter a valid Reservation ID...
            </Text>
          </View>
        );
      }

      return (
        <View>
          <Card key={data.reservation.id}>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Reservation ID: {data.reservation.id}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Name on Reservation: {data.reservation.name}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Hotel: {data.reservation.hotelName}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Check-In Date: {data.reservation.arrivalDate}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Check-Out Date: {data.reservation.departureDate}</Text>
              </Grid>
            </CardItem>
          </Card>
          <View />
        </View>
      );
    }}
  </Query>
);

const GET_RESERVATION = gql`
  query reservation($id: ID!) {
    reservation(id: $id) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

const styles = {
  reservationButton: {
    backgroundColor: '#EF5350',
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  centerContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

/*
// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function FindReservation({ data: { loading, reservation } }) {
  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    if (reservation) {
      return (
        <View>
          <Card key={reservation.id}>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Name on Reservation: {reservation.name}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Hotel: {reservation.hotelName}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Check-In Date: {reservation.arrivalDate}</Text>
              </Grid>
            </CardItem>
            <CardItem bordered>
              <Grid style={styles.gridStyle}>
                <Text>Check-Out Date: {reservation.departureDate}</Text>
              </Grid>
            </CardItem>
          </Card>
        </View>
      );
    } else {
      return (
        <View style={styles.centerContainter}>
          <Text style={{ justifyContent: 'center', marginTop: midscreen }}>
            Please enter a reservation ID...
          </Text>
        </View>
      );
    }
  }
}

/*
<View>
      <Button block style={styles.reservationButton}>
        <Text>Find Reservation</Text>
      </Button>
    </View>


const graphqlVariables = ( { reservationId }) => ({
  variables: {
    id: reservationId
  }
});

// You can also use `graphql` for GraphQL mutations
export default graphql(
  gql`
    query reservation($id: ID!) {
      reservation(id: $id) {
        name
        id
        hotelName
        arrivalDate
        departureDate
      }
    }
  `,
  { options: graphqlVariables }
)(FindReservation);
*/
