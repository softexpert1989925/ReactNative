import React, {Component} from 'react';
import { AppRegistry, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component{
   constructor(){
       super();
   }
   onButtonPress(){
      console.log("button pressed!");
   }
    render() {     
        return (
          <View style={styles.container}>
            <TextInput style = {styles.input} 
                            autoCapitalize="none" 
                            onSubmitEditing={() => this.passwordInput.focus()} 
                            autoCorrect={false} 
                            keyboardType='email-address' 
                            returnKeyType="next" 
                            placeholder='Email or Mobile Num' 
                            placeholderTextColor='rgba(225,225,225,0.7)'/>

               <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        ref={(input)=> this.passwordInput = input} 
                        placeholder='Password' 
                        placeholderTextColor='rgba(225,225,225,0.7)' 
                        secureTextEntry/>

               <TouchableOpacity style={styles.buttonContainer} 
                                    onPress={this.onButtonPress}> 
                            <Text  style={styles.buttonText}>LOGIN</Text>
                 </TouchableOpacity>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
     padding: 20,
     justifyContent:"center"     
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        width:300,
        marginBottom:20
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        
    }
  });
//  AppRegistry.registerComponent('Component1',()=>Component1);