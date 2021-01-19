import React from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'


function Reports({navigation}) {

        return (
           <View style={styles.container}>
             <Text>Reports</Text>
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
      });

export default Reports
