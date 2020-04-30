import React from "react";
import { Text, View } from "react-native";
import {createAppContainer, createStackNavigator } from "react-navigation";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import ProfileScreen from "./containers/Profile";
import Icon from 'react-native-vector-icons/Ionicons';


const Tabs = createMaterialBottomTabNavigator(
  {
    EXPLORE: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <View>
            <Icon style={[{color: 'white'}]} size={25} name={'md-search'} />
          </View>
          );
        }
      }
    },
    MATCHES: {
      screen: MatchesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <View>
            <Icon style={[{color: 'white'}]} size={25} name={'md-heart'} />
          </View>
          );
        }

      }

    },
    CHAT: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
            <View>
            <Icon style={[{color: 'white'}]} size={25} name={'md-chatbubbles'} />
          </View>
          );
        }
      }
    },
    PROFILE: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconFocused = focused ? "#7444C0" : "#363636";
          return (
           <View>
            <Icon style={[{color: 'white'}]} size={25} name={'md-person'} />
          </View>
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 12,
      },
      style: {
        backgroundColor: "#FFF",
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 }
      }
    }
  }
);

export default createAppContainer(Tabs);


