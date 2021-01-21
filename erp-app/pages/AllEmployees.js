import React, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { theme } from 'galio-framework';


function AllEmployees({navigation}) {

return (
            <View style={styles.container}>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Maher Halawi</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Mohammad Al Dada</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Mostafa Aenezan</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Maher Halawi</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Mohammad Al Dada</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
              <View style={styles.item}>
                <Text  style={{ fontSize: 18, color: theme.COLORS.PRIMARY, fontWeight: "700"}} onPress ={() => navigation.navigate('Profile')}>Mostafa Aenezan</Text>
              <View style={{paddingTop: 2, paddingBottom: 8}}>
                <Text style={{ fontSize: 18, color: theme.COLORS.SECONDARY, fontWeight: "700"}}>Lead Dev</Text>
              </View>
              </View>
            </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: { flex: 1, paddingTop: 30, backgroundColor: '#009387'},
        item: {flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderWidth: 1,  backgroundColor: '#242424', borderColor: '#A3BCB6'}
      });

export default AllEmployees


