import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';
import icons from 'react-native-vector-icons/Ionicons'
import { TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import Layout from './styles/layout'
import home from './screens/home';
import profile from './screens/profile';
import instructions from './screens/instructions'

import store from './store'

const TabNavigation = TabNavigator(
  {
    Home: { screen: home },
    Profile: { screen: profile },
    Instructions: { screen: instructions }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#ADBACB',
      style: {
        backgroundColor: '#445368',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      tabStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 300
      },
      labelStyle: {
        fontSize: 18,
      }
    }
  }
)

export default class App extends React.Component {
  render() {
    return <Provider store={ store }>
        <TabNavigation />
      </Provider>

  }
}