import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      confirmed:0,
      recovered:0,
      deaths:0
    }
  }
  componentDidMount(){
    fetch('https://covid19.mathdro.id/api')
    .then((response) => response.json())
    .then((json) => {
      // return json.confirmed;
      console.log(json.confirmed.value)
      this.setState({
        confirmed:json.confirmed.value,
        recovered:json.recovered.value,
        deaths:json.deaths.value
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.Container}>
        <Image
        style={styles.tinyLogo}
        source={require('./../../assets/covid-19.jpg')}
      />
      <View style={styles.worldwideCard}>
        <Text style={styles.worldwideText}>CORONA UPDATES</Text>
      </View>
      <View style={styles.casesView}>
      <View style={styles.rocoverView}>
      <Image
        style={styles.casesLogo}
        source={require('./../../assets/patient.png')}
      />
        <Text style={styles.caseTitle}>CASES</Text>
    <Text style={styles.caseValue}>{this.state.confirmed}</Text>
      </View>
      <View style={styles.deathView}>
      <Image
        style={styles.casesLogo}
        source={require('./../../assets/death.png')}
      />
        <Text style={styles.caseTitle}>DEATHES</Text>
    <Text style={styles.caseValue}>{this.state.deaths}</Text>
      </View>
      </View>

      <View style={styles.casesView}>
      <View style={styles.rocoveredView}>
      <Image
        style={styles.casesLogo}
        source={require('./../../assets/recover.png')}
      />
        <Text style={styles.caseTitle}>RECOVERED</Text>
    <Text style={styles.caseValue}>{this.state.recovered}</Text>
      </View>

      </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
 
  },
  tinyLogo:{
    width:"100%",
    height:250,

  },
  worldwideCard:{
    width:"90%",
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor:"#6e4bb4",
    padding:"10%",
    borderRadius:5,
    marginTop: -50
  },
  worldwideText:{
    textAlign:"center",
    color:"white",
    fontSize:25
  },
  rocoverView:{
   justifyContent:"center",
   backgroundColor:"#ffb25a",
   width:"45%",
   alignItems:"center",
   padding:20,
   borderRadius:10,
   margin:1
  },
  casesLogo:{
    width:"40%",
    height:60,
    borderRadius:50,
    padding:10
  
  },
  casesView:{
    padding:5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  deathView:{
    justifyContent:"center",
    backgroundColor:"#ff5959",
    width:"45%",
    alignItems:"center",
    padding:20,
    borderRadius:10,
    margin:5
  },
  caseTitle:{
    color:"white",
    fontSize:20
  },
  rocoveredView:{
    justifyContent:"center",
    backgroundColor:"#4cd97b",
    width:"90%",
    alignItems:"center",
    padding:20,
    borderRadius:10,
    margin:2
  }
});

export default Home;
