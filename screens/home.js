import React from 'react';
import { Button, View } from 'react-native';
import Layout from '../styles/layout';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

@withMappedNavigationProps()
export default class Home extends React.Component {
  static navigationOptions = { title: 'Welcome' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ Layout.container }>
        <Button
          title="Go to Profile page"
          onPress={() =>
          navigate('Profile', { name: 'progress' })
        } />
      </View>
    );
  }
}