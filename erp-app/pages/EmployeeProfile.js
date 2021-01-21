import React from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'


function EmployeeProfile({navigation}) {

        return (
           <View style={styles.container}>
             <Text>Profile Page</Text>
             <Button style={styles.button} title="Back Home" onPress={() => navigation.navigate("All Employees")} />
             {/* <Button style={styles.button} title="Back" onPress={() => navigation.goBack()} /> */}
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16,
        },
        title: {
          fontSize: 32,
        },
      });

export default EmployeeProfile
