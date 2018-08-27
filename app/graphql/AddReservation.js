import React, { PropTypes } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { View, Text, Button } from 'native-base';
import { Dimensions } from 'react-native';

const midscreen = Dimensions.get('window').height / 4;

let errorMessage = '';

const AddReservation = ({
  id,
  name,
  hotelName,
  arrivalDate,
  departureDate,
  clearForm
}) => (
  <Mutation
    mutation={ADD_RESERVATION}
    variables={{ id, name, hotelName, arrivalDate, departureDate }}
  >
    {addReservation => (
      <View>
        <Button
          onPress={() => {
            if (true) {
              addReservation();
            } else {
              errorMessage = 'Please enter ALL fields!';
            }
            clearForm();
          }}
          block
          style={styles.reservationButton}
        >
          <Text>Submit</Text>
        </Button>
        <Text>{errorMessage}</Text>
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

export default AddReservation;
