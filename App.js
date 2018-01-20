import React from 'react';
import {StyleSheet, View, StatusBar, Navigator} from 'react-native';
import Main from "./components/Main";
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'
import AddDeck from "./components/AddDeck";

function MyStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const MainNavigator = StackNavigator({
    Decks: {
        screen: Main,
        navigationOptions: {
            title: 'Decks'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            title: 'Add new deck'
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MainNavigator/>
      </View>
    );
  }
}

