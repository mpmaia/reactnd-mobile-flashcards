import React from 'react';
import {StyleSheet, View, StatusBar, Navigator} from 'react-native';
import Main from "./components/Main";
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'

function MyStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const MainNavigator = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Decks'
        }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});
