import React from "react";
import {View, ImageBackground, Text} from "react-native";
import WelcomeText from "./helpers/WelcomeText.js";

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <ImageBackground source = {require("../assets/portfolio.png")} style = {this.props.styles["cardBackground"]}>
            <View style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText
                styles = {[this.props.styles["welcomeHeader"],this.props.styles["welcomeHeaderText"]]}
                headerText = "Portfolio"/>
            </View>
        </ImageBackground>
    }
}