//Home.js

import React, { Component } from 'react';
import { View, Text , StyleSheet,Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="next" onPress={()=>this.props.navigation.navigate("AddItemScreen")}></Button>
      </View>
    )
  }
}


const styles=StyleSheet.create({
   container:{
     flex:1,
     justifyContent:"center",     
     alignItems:"center"
   }
});