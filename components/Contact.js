import React from "react";
import { ImageBackground, View,Text } from "react-native";

import WelcomeText from "./helpers/WelcomeText.js";
import WebOpeningButton from "./helpers/WebLink.js";

export default class Contact extends React.Component{
    constructor(props){
        super(props);

        this.dataForLinks = require("./data/data.json");
    }
    render(){
        return <ImageBackground source = {require("../assets/contact2.png")} style = {this.props.styles["cardBackground"]}>
            <View style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText 
                styles = {[this.props.styles["welcomeHeader"],this.props.styles["welcomeHeaderText"]]} 
                headerText = {"Contact"}/>
                <View style = {[this.props.styles["describeContainer"]]}>
                    {this.dataForLinks["contactLinks"].length === 0 ? <Text></Text> : this.dataForLinks["contactLinks"].map((elem) => {return <WebOpeningButton
                    url = {elem[1]}
                    text = {elem[0]}
                    key = {"link"+elem[0]}
                    styles = {this.props.styles}/>})}
                </View>
            </View>
        </ImageBackground>
    }
}