import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

export function DrawerContent(props) {

     const [isDarkTheme, setIsDarkTheme] = React.useState(false)

     const toggleTheme = () => {
          setIsDarkTheme(!isDarkTheme)
     }

     return(
          <View style={{flex: 1}}>
               <DrawerContentScrollView { ...props }>
                    <View style = {styles.DrawerContent }>
                         <View style= { styles.userInfoSection }>
                              <View style={{ flexDirection: 'row', marginTop: 15 } }>
                                   <Avatar.Image
                                   source={{
                                        url: 'https://appamatix.com/wp-content/uploads/2016/05/guy-fawkes-442x450.jpg'
                                   }}
                                   size={50}
                                   />
                                   <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                        <Title style ={styles.title}>Maher Halawi</Title>
                                        <Caption style = { styles.caption }>Lead Dev</Caption>
                                   </View>
                              </View>
                              <Drawer.Section style={ styles.drawerSection }>
                                   <DrawerItem
                                        icon={({color, size}) => (
                                             <Ionicons
                                             name="md-people-outline"
                                             color={color}
                                             size={size}
                                             />
                                        )}
                                        label="All Employees"
                                        onPress={() => {props.navigation.navigate('All Employees')}}
                                   />
                              </Drawer.Section>
                              <Drawer.Section style={ styles.drawerSection }>
                                   <DrawerItem
                                        icon={({color, size}) => (
                                             <Ionicons
                                             name="md-person-outline"
                                             color={color}
                                             size={size}
                                             />
                                        )}
                                        label="Profiles"
                                        onPress={() => {props.navigation.navigate('Profile')}}
                                   />
                              </Drawer.Section>
                              <Drawer.Section style={ styles.drawerSection }>
                                   <DrawerItem
                                        icon={({color, size}) => (
                                             <Ionicons
                                             name="md-pulse-outline"
                                             color={color}
                                             size={size}
                                             />
                                        )}
                                        label="KPI"
                                        onPress={() => {props.navigation.navigate('KPI')}}
                                   />
                              </Drawer.Section>
                              <Drawer.Section style={ styles.drawerSection }>
                                   <DrawerItem
                                        icon={({color, size}) => (
                                             <Ionicons
                                             name="md-documents-outline"
                                             color={color}
                                             size={size}
                                             />
                                        )}
                                        label="Reports"
                                        onPress={() => {props.navigation.navigate('Reports')}}
                                   />
                              </Drawer.Section>
                              <Drawer.Section titlle="Preferences">
                                   <TouchableRipple onPress={() => {toggleTheme()}}>
                                        <View style={ styles.preference }>
                                             <Text>Dark Theme</Text>
                                             <View pointerEvents="none">
                                                  <Switch value={isDarkTheme}/>
                                             </View> 
                                        </View>
                                   </TouchableRipple>
                              </Drawer.Section>
                         </View>
                    </View>
               </DrawerContentScrollView>
               <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                                        icon = {({color, size}) => (
                                        <Ionicons
                                        name="md-skull"
                                        color={color}
                                        size={size}
                                        />
                                   )}
                                   label="Sign Out"
                                   onPress={() => {}}
                              />
               </Drawer.Section>
          </View>
     )
}

const styles = StyleSheet.create({
     DrawerContent: {
          flex: 1
     },
     userInfoSection: {
          paddingLeft: 20
     },
     title: {
          fontSize: 16,
          marginTop: 3,
          fontWeight: 'bold'
     },
     caption: {
          fontSize: 14,
          lineHeight: 14
     },
     row: {
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center'
     },
     section: {
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15
     },
     paragraph: {
          fontWeight: 'bold',
          marginRight: 3
     },
     drawerSection: {
          marginTop: 14
     },
     bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
     },
     preference: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
          paddingHorizontal: 16
     }


})

export default DrawerContent