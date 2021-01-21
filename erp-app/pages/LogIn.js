import React from 'react'
import { Button, TextInput, TouchableOpacity, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'


function LogIn({navigation}) {

        return (
<View style={styles.container}>
      <Text style={styles.titleText}>MnM Software Inc</Text>
        <TextInput
        autoCapitalize = 'none'
          placeholder='username'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("All Employees")}
       >
         <Text style={styles.buttonText}> Login </Text>
       </TouchableOpacity>
       <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("All Employees")}
       >
         <Text style={styles.buttonText}> Register </Text>
       </TouchableOpacity>
        
      </View>
    );
  }

      
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#009387',
    },
    titleText:{
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold'
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'powderblue',
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 15,
      marginBottom: 10,
    },
    buttonText:{
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: 200,
      fontSize: 20,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'white',
      marginVertical: 10,
    },
  });

export default LogIn
