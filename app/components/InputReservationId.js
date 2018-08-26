import React, { Component } from 'react';
import FindReservation from '../graphql/FindReservation';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
//All Reservations
export default class InputReservationId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordEncrypted: false,
      reservationId: ''
    };
  }

  findReservation = () => {
    alert(`Submitted ${this.state.reservationId}`);
    this.setState({ reservationId: '' });
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>Find Reservation</Title>
          </Body>
        </Header>
        <Content>
          <Form style={{ backgroundColor: 'white', marginHorizontal: 20 }}>
            <Item inlineLabel>
              <Icon active name="calendar" style={{ color: 'orange' }} />
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                Reservation ID
              </Label>
              <Input
                secureTextEntry={this.state.passwordEncrypted}
                value={this.state.reservationId}
                onChangeText={reservationId => this.setState({ reservationId })}
                //returnKeyType={'send'}
                //onSubmitEditing={this.findReservation}
              />
              {/*Eye Button*/}
              <Button
                transparent
                onPress={() =>
                  this.setState({
                    passwordEncrypted: !this.state.passwordEncrypted
                  })
                }
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Ionicons name="ios-eye" size={26} />
                {/*"Show" if password encrypted*/}
                {this.state.passwordEncrypted && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      marginTop: -8
                    }}
                  >
                    Show
                  </Text>
                )}
                {/*"Hide" if password not encrypted*/}
                {!this.state.passwordEncrypted && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      marginTop: -8
                    }}
                  >
                    Hide
                  </Text>
                )}
              </Button>
            </Item>
          </Form>
          <FindReservation reservationId={this.state.reservationId} />
        </Content>
      </Container>
    );
  }
}

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
  loginButton: {
    backgroundColor: '#EF5350',
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  }
};
