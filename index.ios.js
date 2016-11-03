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
  MapView,
} from 'react-native';

export default class LectureApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Indy!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 200, height: 200, borderRadius: 100}} />
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
