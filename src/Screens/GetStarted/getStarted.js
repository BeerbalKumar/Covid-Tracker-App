import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';



class GetStarted extends React.Component {
  componentDidMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Home')
    },6000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={require('./../../assets/virus.png')}
      />
          <Text style={styles.getStarted}>COVID-19</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  getStarted: {
    color: '#eb5569',
    padding: '2%',
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:30
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default GetStarted;
