import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { View, Text, Button } from 'native-base';
import _ from 'lodash';

export default ({
  name,
  hotelName,
  arrivalDate,
  departureDate,
  validated,
  clearForm
}) => (
  <Mutation
    mutation={ADD_RESERVATION}
    variables={{
      id: _.times(5, () => _.random(35).toString(36)).join(''),
      name,
      hotelName,
      arrivalDate,
      departureDate
    }}
  >
    {mutate => (
      <View>
        {validated && (
          <Button
            onPress={() => {
              mutate({
                refetchQueries: ['getAllReservations']
              });
              //client.queryManager.refetchQueryByName('getAllReservations');
              clearForm();
              alert('Reservation Added!');
            }}
            block
            style={styles.reservationButton}
          >
            <Text>Submit</Text>
          </Button>
        )}
        {!validated && (
          <Text style={{ alignSelf: 'center', marginTop: 60 }}>
            Please fill EVERY field!
          </Text>
        )}
      </View>
    )}
  </Mutation>
);

const ADD_RESERVATION = gql`
  mutation addReservation(
    $id: ID!
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    addReservation(
      id: $id
      name: $name
      hotelName: $hotelName
      arrivalDate: $arrivalDate
      departureDate: $departureDate
    ) {
      id
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
