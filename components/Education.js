import React from "react";
import {View, ScrollView, Text, ImageBackground} from "react-native";
import WelcomeText from "./helpers/WelcomeText.js";

export default class Education extends React.Component{
    constructor(props){
        super(props);
        this.data = require("./data/education.json");
        this.educationData = this.data["education"];
    }
    render(){
        return <ImageBackground source = {require("../assets/education.png")} style = {this.props.styles["cardBackground"]}>
            <ScrollView style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText
                    styles = {["",this.props.styles["welcomeHeaderText"]]}
                    headerText = "Education"/>
                <View style = {[this.props.styles["educationSubSection"],this.props.styles["firstSection"]]}>
                    <WelcomeText
                    styles = {["",this.props.styles["welcomeHeaderText"]]}
                    headerText = "Colleges"/>
                    {this.educationData["colleges"].map((elem) => {return <View style = {this.props.styles["educationLanguageWrapper"]} key = {"school"+elem["name"]}>
                        <WelcomeText 
                        styles = {[this.props.styles["educationName"], this.props.styles["educationNameText"], "GoblinOne-Regular"]}
                        headerText = {elem["name"]}/>
                        <View style = {this.props.styles["educationDataWrapper"]}>
                        <WelcomeText
                            styles = {[this.props.styles["roleContainer"],this.props.styles["educationDataText"], "GoblinOne-Regular"]}
                            headerText = {elem["type"]}/>
                            <WelcomeText
                            styles = {[this.props.styles["roleContainer"],this.props.styles["educationDataText"], "GoblinOne-Regular"]}
                            headerText = {elem["beginning"] + " - "+elem["ending"]}/>
                        </View>                 
                    </View>})}
                </View>
                <View style = {this.props.styles["educationSubSection"]}>
                    <WelcomeText
                    styles = {["",this.props.styles["welcomeHeaderText"]]}
                    headerText = "Languages"/>
                    {this.educationData["languages"].map((elem) => {
                        return <WelcomeText
                        key = {"language"+elem["name"]}
                        styles = {[this.props.styles["educationLanguageWrapper"], this.props.styles["educationLanguageName"], "GoblinOne-Regular"]}
                        headerText = {elem["name"] + " - " + elem["level"]}/>
                    })}
                </View>
            </ScrollView>
        </ImageBackground>
    }
}
/*
                            <WelcomeText
                            styles = {[this.props.styles["educationDataWrapper"],this.props.styles["educationDataText"], "GoblinOne-Regular"]}
                            headerText = "high school"/>*/