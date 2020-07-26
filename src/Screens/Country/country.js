import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native';


class AddPerson extends React.Component {
  constructor() {
    super();
    this.state = {
      itemValue: "Pakistan",
      confirmed: 0,
      recovered: 0,
      deaths: 0
    }
  }



  handel = async(itemValue, itemIndex) => {
    console.log(itemValue)
    this.setState({ itemValue: itemValue })
   await fetch(`https://covid19.mathdro.id/api/countries/${itemValue}`)
      .then((response) => response.json())
      .then((json) => {
        // return json.confirmed;
        console.log(json)
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.addPersonTitle}>Select Country</Text>
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#eb5569" }}>
          <Picker
            selectedValue={this.state.itemValue}
            style={{ height: 50, width: 350, borderColor: "white", borderWidth: 3 }}
            onValueChange={(itemValue, itemIndex) =>this.handel(itemValue,itemIndex)}
          >
            <Picker.Item label="Pakistan" value="Pakistan" />
            <Picker.Item label="India" value="India" />
          </Picker>
        </View>
        <ScrollView>
          <View style={styles.AddPerson}></View>
          <View style={styles.addPersonForm}>
            <Text style={{color:"#eb5569",textAlign:"center",fontSize:20}}>{this.state.itemValue}</Text>
            <View style={styles.totalCasesView}>
              <Image
                style={styles.casesLogo}
                source={require('./../../assets/patient.png')}
              />
              <Text style={styles.casesTitle}>TOTAL CASES</Text>
              <Text>{this.state.confirmed}</Text>
            </View>
            <View style={styles.recoverCasesView}>
              <Image
                style={styles.casesLogo}
                source={require('./../../assets/recover.png')}
              />
              <Text style={styles.casesTitle}>RECOVER CASES</Text>
              <Text>{this.state.recovered}</Text>
            </View>
            <View style={styles.deathCasesView}>
              <Image
                style={styles.casesLogo}
                source={require('./../../assets/death.png')}
              />
              <Text style={styles.casesTitle}>RECOVER CASES</Text>
              <Text>{this.state.deaths}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AddPerson: {
    backgroundColor: '#eb5569',
    padding: 110,
    fontSize: 20,
    borderBottomRightRadius: 100,
  },
  container: {
    // paddingBottom: 50,
    flex: 1,
  },
  addPersonTitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: "#eb5569"
  },
  addPersonForm: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    elevation: 10,
    marginTop: -200,
    padding: '5%',
    marginBottom: 10,
  },
  totalCasesView: {
    backgroundColor: "#ffb25a",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    marginTop: 20
  },
  casesLogo: {
    width: "30%",
    height: 90
  },
  recoverCasesView: {
    backgroundColor: "#4cd97b",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    marginTop: 20
  },
  deathCasesView: {
    backgroundColor: "#ff5959",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
    marginTop: 20
  },
  casesTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  }
});

export default AddPerson;
