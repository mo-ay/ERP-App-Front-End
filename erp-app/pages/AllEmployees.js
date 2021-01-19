import React from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'


function AllEmployees({navigation}) {

        return (
           <View style={styles.container}>
             <Text>Home Screen</Text>
             <Button title="View Profile" onPress={() => navigation.navigate("Profile")} />
             <Button title="View KPI Page" onPress={() => navigation.navigate("KPI")} />
             <Button title="View Reports" onPress={() => navigation.navigate("Reports")} />
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
      });

export default AllEmployees
