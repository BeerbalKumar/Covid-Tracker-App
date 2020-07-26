import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppRegistry
} from 'react-native';
import DrawerNavigation from './src/Config/drawer';

class App extends React.Component {
  render() {
    return <DrawerNavigation />;
  }
}
AppRegistry.registerComponent("appName", () => App);

export default App;
