import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

export default class LoginAnother extends Component{

    //  state={
    //   email   : "",
    //   password: ""
    //  }
    constructor(props) {
        super(props);
        this.state = {
          email   : "",
          password: "",
        }       
      }
      onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
      }
      httpServerCheck=()=>{
        //  Alert.alert("alert", this.state.password);
        // if(this.state.email!=null&&this.state.password!=null)
        // connect node server.
          fetch("http://192.168.1.131:3000/",{  method:"POST",  
                                                    headers: {
                                                        Accept: 'application/json',
                                                        'Content-Type': 'application/json',
                                                    },
                                                  body:JSON.stringify({   email:this.state.email,
                                                                          password:this.state.password
                                                                     })
                                           }
           )
          .then((response)=>response.json())
          .then((responseJson)=>{
              this.onClickListener(responseJson.result);
          })
          .catch((error)=>{
              console.log(error);
          });
      }

      render(){
          return(
            <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
    
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.httpServerCheck()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                <Text>Register</Text>
            </TouchableHighlight>
          </View>
          );
      }

    
}

const styles = StyleSheet.create({
    container: {
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      padding:20
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });