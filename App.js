/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , Switch, Image} from 'react-native';

import Login from './app/com/login/oriLogin'
import LoginAnother from './app/com/login/UILogin'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  AddItemScreen: { screen: AddItem },
  ListItemScreen: { screen: ListItem }
});

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    super();
    this.state={
      switchValue:false
    }
  }
 onValueChange(value){
   this.setState({
     switchValue:value
   });
 }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.container_image}>
  //           <Switch
  //               value={this.state.switchValue}
  //               onValueChange={(value)=>this.onValueChange(value)} 
  //           />
  //           <View >
  //                       <Image resizeMode="contain" style={styles.logo} source={require('./assets/images/bob.png')} />
  //           </View>
  //       </View>
  //           <View style={styles.container_login}> 
  //             {this.state.switchValue==true?( <LoginAnother/>):(<Login/>)}             
                  
  //           </View>
  //     </View>
  //   );
  // }

  render(){
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    backgroundColor: 'green',
  },
  container_image:{
    justifyContent: 'flex-end',
     alignItems: 'center',
     flex:0.5     
  },
  container_login:{
    justifyContent: 'center',
     alignItems: 'center',
     flex:0.5
     
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
