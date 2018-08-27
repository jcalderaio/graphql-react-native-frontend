import React, { Component } from 'react';
import AddReservation from '../graphql/AddReservation';
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
export default class InputAddReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      hotelName: '',
      arrivalDate: '',
      departureDate: ''
    };
  }

  get validated() {
    if (
      this.state.id != '' &&
      this.state.firstName != '' &&
      this.state.lastName != '' &&
      this.state.hotelName != '' &&
      this.state.arrivalDate != '' &&
      this.state.departureDate != ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  clearForm = () => {
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      hotelName: '',
      arrivalDate: '',
      departureDate: ''
    });
  };

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Title style={styles.headerText}>Add Reservation</Title>
          </Body>
        </Header>
        <Content>
          <Form
            style={{
              backgroundColor: 'white',
              marginHorizontal: 20,
              marginTop: 30
            }}
          >
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                ID
              </Label>
              <Input
                value={this.state.id}
                onChangeText={id => this.setState({ id })}
              />
            </Item>
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                First Name
              </Label>
              <Input
                value={this.state.firstName}
                onChangeText={firstName => this.setState({ firstName })}
              />
            </Item>
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                Last Name
              </Label>
              <Input
                value={this.state.lastName}
                onChangeText={lastName => this.setState({ lastName })}
              />
            </Item>
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                Hotel Name
              </Label>
              <Input
                value={this.state.hotelName}
                onChangeText={hotelName => this.setState({ hotelName })}
              />
            </Item>
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                Arrival Date
              </Label>
              <Input
                value={this.state.arrivalDate}
                onChangeText={arrivalDate => this.setState({ arrivalDate })}
              />
            </Item>
            <Item inlineLabel>
              <Label
                style={{
                  fontWeight: 'bold',
                  fontSize: 14
                }}
              >
                Departure Date
              </Label>
              <Input
                value={this.state.departureDate}
                onChangeText={departureDate => this.setState({ departureDate })}
              />
            </Item>
          </Form>
          <AddReservation
            id={this.state.id}
            name={`${this.state.firstName} ${this.state.lastName}`}
            hotelName={this.state.hotelName}
            arrivalDate={this.state.arrivalDate}
            departureDate={this.state.departureDate}
            clearForm={this.clearForm}
            validated={this.validated}
          />
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
  },
  centerContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
