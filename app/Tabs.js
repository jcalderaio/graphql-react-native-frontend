import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Grid,
  Footer,
  FooterTab,
  Icon,
  Button,
  View
} from 'native-base';
import AllReservations from './graphql/AllReservations';
import InputReservationId from './components/InputReservationId';
import InputAddReservation from './components/InputAddReservation';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'reservations'
    };
  }

  renderSelectedTab = () => {
    switch (this.state.selectedTab) {
      case 'reservations':
        return <AllReservations />;
        break;
      case 'findReservation':
        return <InputReservationId />;
        break;
      case 'addReservation':
        return <InputAddReservation />;
        break;
      default:
    }
  };

  render() {
    return (
      <Container>
        {this.renderSelectedTab()}
        <Footer>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'reservations'}
              onPress={() => this.setState({ selectedTab: 'reservations' })}
            >
              Reservations
              <Icon name="ios-bookmarks" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'findReservation'}
              onPress={() => this.setState({ selectedTab: 'findReservation' })}
            >
              Find Reservation
              <Icon name="ios-person" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'addReservation'}
              onPress={() => this.setState({ selectedTab: 'addReservation' })}
            >
              Add Reservation
              <Icon name="ios-add" />
            </Button>
          </FooterTab>
        </Footer>
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
    color: 'white',
    marginTop: 15,
    fontSize: 16
  },
  gridStyle: {
    justifyContent: 'center'
  }
};
