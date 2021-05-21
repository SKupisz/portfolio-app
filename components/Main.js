import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Swiper from "react-native-swiper";
import Welcome from './Welcome.js';
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";
import Education from "./Education.js";
import Contact from "./Contact.js";

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <View style = {this.props.styles["safeAreaView"]}>
            <Swiper showsButtons={false} showsPagination={false}>
                <Welcome styles = {this.props.styles}/>
                <Skills styles = {this.props.styles}/>
                <Portfolio styles = {this.props.styles}/>
                <Education styles = {this.props.styles}/>
                <Contact styles = {this.props.styles}/>
            </Swiper>
            <StatusBar style="auto" />
        </View>
    } 
}