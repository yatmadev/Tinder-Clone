import React from "react";
import { Text, View } from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Splash from './containers/Splash';
import Icon from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs'


const AppStackNavigator = createStackNavigator({ 

  Splash:{
    screen: Splash,
        navigationOptions: () => ({
      headerShown: false
    }),
  },
   
  Tabs:{
    screen:Tabs,
    navigationOptions: () => ({
      headerShown: false
    }),
  },

});



const App = createAppContainer(AppStackNavigator);
export default App; 


