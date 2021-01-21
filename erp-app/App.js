
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import LogIn from './pages/LogIn'
import AllEmployees from './pages/AllEmployees'
import EmployeeProfile from './pages/EmployeeProfile';
import KpiPage from './pages/KpiPage'
import Reports from './pages/Reports'
import { Ionicons } from '@expo/vector-icons';

import { DrawerContent } from './pages//DrawerContent'
import { Avatar } from 'react-native-paper';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const KpiStack = createStackNavigator();
const ReportsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator screenOptions={{
            headerStyle:{
            backgroundColor: '#009387',
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
            <LoginStack.Screen name="Login" component={LogIn} options={{
              title: 'Login',
              headerLeft: () => (
                <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}></Ionicons>
              )
            }} />
        </LoginStack.Navigator>
  )

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
          headerStyle:{
          backgroundColor: '#009387',
        },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}>
          <HomeStack.Screen name="All Employees" component={AllEmployees} options={{
            title: 'All Employees',
            headerLeft: () => (
              <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}></Ionicons>
            )
          }} />
      </HomeStack.Navigator>
)
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
            headerStyle:{
            backgroundColor: '#009387',
          },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}>
            <ProfileStack.Screen name="Profile" component={EmployeeProfile} options={{
            title: 'Profile',
            headerLeft: () => (
              <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}></Ionicons>
            )
          }} />
        </ProfileStack.Navigator>
  )
  const KpiStackScreen = ({navigation}) => (
    <KpiStack.Navigator screenOptions={{
              headerStyle:{
              backgroundColor: '#009387',
            },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}>
              <KpiStack.Screen name="KPI" component={KpiPage} options={{
            title: 'KPI',
            headerLeft: () => (
              <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}></Ionicons>
            )
          }} />
          </KpiStack.Navigator>
    )
    const ReportsStackScreen = ({navigation}) => (
      <ReportsStack.Navigator screenOptions={{
                headerStyle:{
                backgroundColor: '#009387',
              },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}>
                <ReportsStack.Screen name="Reports" component={Reports} options={{
            title: 'Reports',
            headerLeft: () => (
              <Ionicons name="menu" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}></Ionicons>
            )
          }} />
            </ReportsStack.Navigator>
      )


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login" drawerContent={ props => <DrawerContent { ...props } />}>
        <Drawer.Screen name="Log In" component={ LoginStackScreen }/>
        <Drawer.Screen name="All Employees" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="KPI" component={KpiStackScreen} />
        <Drawer.Screen name="Reports" component={ReportsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;