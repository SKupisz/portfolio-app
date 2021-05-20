import React from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import {useFonts} from "expo-font";

import Main from "./components/Main.js";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"
    },
    safeAreaView: {
      backgroundColor: "white",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    scrollView: {
      flex: 1,
      width: "100%",
      height: "100%",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      alignItems: "stretch",
      textAlign: "center"
    },
    cardBackground: {
      flex: 1,
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    }, 
    cardContentContainer: {
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: "rgba(0,0,0,.6)"
    },
    horizontalView: {
      flex: 1,
      flexDirection: "column",
      width: "100%",
      height: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "stretch",
      textAlign: "center"
    },
    welcomeHeader: {
      width: "100%",
      alignItems: "center",
      padding: 5,
      paddingTop: 15,
      marginBottom: 40,
      flex: 1
    },
    welcomeHeaderText: {
      fontSize: 36,
      fontFamily: "Roboto",
      textAlign: "center",
      width: "100%",
      color: "white"
    },
    describeContainer: {
      flex: 11,
      width: "100%",
      alignItems: "center",
      padding: 5,
      justifyContent: "center"
    },
    describeText: {
      width: "100%",
      textAlign: "center",
      fontSize: 26,
      fontFamily: "Roboto",
      color: "rgba(255,255,255,.9)",
      padding: 10
    },
    linkPressable: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      alignItems: "center",
      padding: 10,
      borderRadius: 10,
      marginBottom: 7
    },
    linkText: {
      fontSize: 26,
      fontFamily: "Roboto",
      color: "rgba(255,255,255,.9)"
    },
    skillsContainer: {
      width: "100%",
      flex: 12,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    skillsHeader: {
      width: "100%",
      alignItems: "center",
      padding: 5,
      paddingTop: 15,
      marginBottom: 20,
    },
    skillsHeaderText: {
      fontSize: 26,
      fontFamily: "Roboto",
      textAlign: "center",
      width: "100%",
      color: "white"
    },
    skillContainerStyle: {
      width: "100%",
      flex: 1,
      marginBottom: 5,
      flexDirection: "row",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto"
    },
    skillNameContainer: {
      flex: 3,
      padding: 5,
      alignItems: "center"
    },
    skillLevelContainer: {
      flex: 2,
      padding: 5,
      alignItems: "center"
    },
    skillText:{
      width: "100%",
      textAlign: "center",
      color: "rgba(255,255,255,.8)",
      fontSize: 20,
      marginLeft: "auto",
    },
    skillLevelBar: {
      width: "80%",
      height: 20,
      backgroundColor: "rgba(255,255,255,.7)",
      borderRadius: 10,
      alignItems: "flex-start",
      justifyContent: "center"
    },
    skillLevelShower: {
      height: 20,
      backgroundColor: "rgba(44, 140, 0, 0.6)",
      borderRadius: 10
    },
    projectText: {
      width: "90%",
      textAlign: "center",
      fontSize: 24,
      padding: 5,
      color: "rgba(255,255,255,.8)",
      fontFamily: "Roboto",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: 7
    },
    roleAndDateContainer: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      flexDirection: "row",
      padding: 5,
      alignItems: "center",
      marginBottom: 40
    },
    roleContainer: {
      flex: 1,
      padding: 5,
      alignItems: "center"
    },
    dateContainer: {
      flex: 1,
      padding: 5,
      alignItems: "center"
    },
    roleDataText: {
      fontSize: 14,
      width: "100%",
      color: "rgba(255,255,255,.8)",
      textAlign: "center",
      fontFamily: "Roboto"
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Main styles = {styles}/>
    </SafeAreaView>
  );
}
