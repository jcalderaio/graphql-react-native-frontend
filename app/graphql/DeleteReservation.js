import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { View, Text, Button } from 'native-base';
import { Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({ id }) => (
  <Mutation mutation={DELETE_RESERVATION} variables={{ id }}>
    {mutate => (
      <Button
        transparent
        onPress={() => {
          Alert.alert('Warning: Delete Reservation?', ' ', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed!')
            },
            {
              text: 'OK',
              onPress: () => {
                mutate({
                  refetchQueries: ['getAllReservations']
                });
                alert('Reservation Deleted!');
              }
            }
          ]);
        }}
      >
        <MaterialCommunityIcons
          name="delete-forever"
          size={26}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            color: 'red'
          }}
        />
      </Button>
    )}
  </Mutation>
);

const DELETE_RESERVATION = gql`
  mutation deleteReservation($id: ID!) {
    deleteReservation(id: $id) {
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
