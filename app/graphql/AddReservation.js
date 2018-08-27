import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { View, Text, Button } from 'native-base';

export default ({
  id,
  name,
  hotelName,
  arrivalDate,
  departureDate,
  validated,
  clearForm
}) => (
  <Mutation
    mutation={ADD_RESERVATION}
    variables={{ id, name, hotelName, arrivalDate, departureDate }}
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
