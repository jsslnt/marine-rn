import React from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'
import Layout from '../styles/layout';

const endpoint = 'https://facebook.github.io/react-native/movies.json';
const getMovies = () => fetch(endpoint)
                .then(result => result.json())
                .then(json => json)
                .catch(error => console.error(error))


@withMappedNavigationProps()
export default class Profile extends React.Component {
  static navigationOptions = { title: 'Profile' }

  constructor(props) {
    super(props)
    this.state = {
      movies: {}
    }
  }

  componentDidMount() {
    getMovies()
      .then(movies => this.setState({movies}))
  }

  render() {
    getMovies()
    const { navigate } = this.props.navigation;
    return (
      <View style={ Layout.container }>
        <Text style={ Layout.label }>We can has { this.props.name || 'progress without props' } !</Text>
        <Text style={ Layout.label }>{ this.state.movies.title }</Text>
        <FlatList
          data={ this.state.movies.movies }
          renderItem={({item}) => <Text>{item.title}</Text>}
          />
        <Button
          title="Back"
          onPress={ () => this.props.navigation.goBack() }></Button>
      </View>
    )
  }
}