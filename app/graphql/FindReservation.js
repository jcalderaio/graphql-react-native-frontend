import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { View, Text, Card, CardItem, Grid, Button } from 'native-base';
import { Dimensions } from 'react-native';

const midscreen = Dimensions.get('window').height / 4;

export default ({ reservationId }) => (
  <Query query={GET_RESERVATION} variables={{ id: reservationId }}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return (
          <View style={styles.centerContainter}>
            <Text style={{ justifyContent: 'center', marginTop: midscreen }}>
              Loading...
            </Text>
          </View>
        );
      }

      if (error) {
        return (
          <View style={styles.centerContainter}>
            <Text style={{ justifyContent: 'center', marginTop: midscreen }}>
              Please enter a valid Reservation ID...
            </Text>
            <Button
              onPress={() => refetch()}
              block
              style={styles.reservationButton}
            >
              <Text>Submit</Text>
            </Button>
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
          <Button
            onPress={() => refetch()}
            block
            style={styles.reservationButton}
          >
            <Text>Submit</Text>
          </Button>
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
    marginTop: 40,
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
