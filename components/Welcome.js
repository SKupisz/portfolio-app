import React from "react";
import { ImageBackground } from "react-native";
import {View,Text} from "react-native";

import WelcomeText from "./helpers/WelcomeText.js";

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        
        this.getTheDescribe = require("./data/data.json");
    }
    render(){
        return <ImageBackground source = {require("../assets/welcome.png")} style = {this.props.styles["cardBackground"]}>
            <View style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText 
                styles = {[this.props.styles["welcomeHeader"],this.props.styles["welcomeHeaderText"]]} 
                headerText = {"Who am I?"}/>
                {this.getTheDescribe.length === 0 ? <Text></Text> : <WelcomeText
                styles = {[this.props.styles["describeContainer"], this.props.styles["describeText"]]}
                headerText = {this.getTheDescribe["shortDescribe"]}/>}
            </View>
        </ImageBackground>
    }
}