import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Swiper from "react-native-swiper";
import Welcome from './Welcome.js';
import Contact from "./Contact.js";

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  <View style = {this.props.styles["safeAreaView"]}>
            <Swiper showsButtons={false} showsPagination={false}>
                <Welcome styles = {this.props.styles}/>
                <Contact styles = {this.props.styles}/>
            </Swiper>
            <StatusBar style="auto" />
        </View>
    } 
}
/*
            <View style = {[this.props.styles["horizontalView"],this.props.styles["second"]]}>
                <Text>aaaaaaa</Text>
            </View>
            <View style = {[this.props.styles["horizontalView"],this.props.styles["third"]]}>
                <Text>aaaaaaa</Text>
            </View>
*/