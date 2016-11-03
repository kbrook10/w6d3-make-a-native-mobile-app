/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
export default class LectureApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter something special' };
  }
  render() {
    let pic = {
      uri: 'https://facebook.github.io/react/img/logo_og.png'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Indy!
        </Text>
        <Text style={styles.instructions}>
          This is my first Mobile App!{'\n'}
        </Text>
        {/* <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text> */}
        <Image source={pic} style={{width: 200, height: 200, borderRadius: 100}} />
        <Text style={styles.welcome}>
          {'\n'}
        </Text>
        <View style={{alignItems: 'center'}}>
          <Greeting name='New User' />
        </View>
        <Text style={styles.welcome}>
          {'\n'}
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center',}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCF9FE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#0096BB',
  },
  instructions: {
    textAlign: 'center',
    color: '#0096BB',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LectureApp', () => LectureApp);
