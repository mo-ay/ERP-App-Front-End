import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, Button } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Block, Text, theme } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';


import {materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get('screen');

export default class AllEmployees extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['KPI', 'Old Eval', 'New Eval', 'Change'],
      tableData: [
        ['Team-Work', '1', '2', '+1'],
        ['Efficiency', '2', '4', '+2'],
        ['Management', '3', '2', '-1']
      ]
    }
  }

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={require('../assets/test1.jpeg')}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>Maher Halawi</Text>
                <Block row space="between">
                  <Block row>
                    <Text size={16} color={materialTheme.COLORS.WARNING}>
                      Lead Dev
                    </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>
        <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE, }}>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Teams</Text>
                <Text muted size={12}>Example Team</Text>
                <Text muted size={12}>Example Team</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Active Project</Text>
                <Text muted size={12}>Example Project</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>Current Role</Text>
                <Text muted size={12}>Tester</Text>
              </Block>
            </Block>
            <Block row space="between" style={{ paddingVertical: 16, alignItems: 'baseline' }}>
              <Text size={14} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('KPI')}>Evaluate</Text>
              <Text size={14} color={theme.COLORS.PRIMARY} onPress={() => this.props.navigation.navigate('All Employees')}>View All Staff</Text>
            </Block>
            <Block style={styles.container}>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.tableData} textStyle={styles.text}/>
        </Table>
      </Block>
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
  container: { flex: 1, width: 290, paddingTop: 3, backgroundColor: '#fff' },
  head: {  height: 30,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
});