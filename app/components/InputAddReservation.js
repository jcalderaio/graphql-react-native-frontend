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
import DatePicker from 'react-native-datepicker';
import { Ionicons } from '@expo/vector-icons';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
//All Reservations
export default class InputAddReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      hotelName: '',
      arrivalDate: '',
      departureDate: ''
    };
  }

  get validated() {
    if (
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
              <DatePicker
                style={{ width: 200 }}
                date={this.state.arrivalDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={arrivalDate => {
                  this.setState({ arrivalDate });
                }}
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
              <DatePicker
                style={{ width: 200 }}
                date={this.state.departureDate}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={departureDate => {
                  this.setState({ departureDate });
                }}
              />
            </Item>
          </Form>
          <AddReservation
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
