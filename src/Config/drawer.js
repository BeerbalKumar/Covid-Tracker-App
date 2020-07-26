import React, {useState} from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import Country from './../Screens/Country/country';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import DrawerContent from './../Screens/DrawerContent/DrawerContent';
import HomeScreen from './../Screens/Home/home';
import GetStartedScreen from './../Screens/GetStarted/getStarted';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation() {

  
  const HeaderLeft = () => {
    const [state, setState] = useState(false);

    const navigation = useNavigation();

    const closedrawer = () => {
      setState(false);
      navigation.dispatch(DrawerActions.closeDrawer());
    };

    const opendrawer = () => {
      setState(true);
      navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View>
            {state ? (
              <TouchableOpacity onPress={() => closedrawer()}>
                <Text>
                  <FeatherIcon name="menu" size={30} color="white" />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => opendrawer()}>
                <Text>
                  <FeatherIcon name="menu" size={30} color="white" />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="Get Started">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{headerShown: null}}
        options={{
          headerStyle: {height: 70, backgroundColor: '#eb5569', color: 'white'},
          headerLeft: ({}) => <HeaderLeft />,
          headerTitleStyle: {color: 'white'},
        }}
      />
      <Stack.Screen
        name="Get Started"
        component={GetStartedScreen}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        options={{
          headerTitleStyle: {color: 'white'},
          headerStyle: {height: 70, backgroundColor: '#eb5569', color: 'white'},
        }}
      />

    </Stack.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={StackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
