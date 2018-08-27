import React, { Component } from 'react';
import { Container, Text, Footer, FooterTab, Icon, Button } from 'native-base';
import AllReservations from './graphql/AllReservations';
import InputReservationId from './components/InputReservationId';
import InputAddReservation from './components/InputAddReservation';

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
              <Icon name="ios-bookmarks" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'findReservation'}
              onPress={() => this.setState({ selectedTab: 'findReservation' })}
            >
              <Icon name="ios-person" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              active={this.state.selectedTab === 'addReservation'}
              onPress={() => this.setState({ selectedTab: 'addReservation' })}
            >
              <Icon name="ios-add" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
