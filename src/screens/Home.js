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
<<<<<<< HEAD

//hhhhh
=======
//sdfsdf

>>>>>>> dc22a298a7fa2072935957b979f388d6530b7200
const styles=StyleSheet.create({
   container:{
     flex:1,
     justifyContent:"center",     
     alignItems:"center"
   }
});