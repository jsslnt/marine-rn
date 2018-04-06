import React from 'react';
import { Button, View, FlatList, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../state'

import Layout from '../styles/layout';
import { withMappedNavigationProps } from 'react-navigation-props-mapper'

const Loader = <View style={ Layout.container}><Text>Loading...</Text></View>

function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

@withMappedNavigationProps()
class Instructions extends React.Component {
  static navigationOptions = { title: 'Instructions' };

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getData(); //call our action
  }

  render() {
    console.log(this.state)
    const { navigate } = this.props.navigation;
    if (this.props.loading) {
      return (<Text>Loading...</Text>)
    } else {
      return (
        <View style={ Layout.container }>
          <Text>Instruxions!</Text>
          <FlatList
            data={ this.props.data }
            renderItem={({item, index}) => <Text>{`${index + 1}: ${item.title}`}</Text>} />
        </View>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);

