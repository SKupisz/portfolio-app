import React from "react";
import {View, ImageBackground, Text} from "react-native";
import WelcomeText from "./helpers/WelcomeText.js";
import ProjectContainer from "./helpers/ProjectContainer.js";
import { ScrollView } from "react-native";

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);

        this.data = require("./data/data.json");
        this.portfolio = this.data["projects"];
    }
    render(){
        return <ImageBackground source = {require("../assets/portfolio.png")} style = {this.props.styles["cardBackground"]}>
            <ScrollView style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText
                styles = {[this.props.styles["welcomeHeader"],this.props.styles["welcomeHeaderText"]]}
                headerText = "Portfolio"/>
                <View style = {this.props.styles["skillsContainer"]}>
                        {this.portfolio.map((elem) => {return <ProjectContainer
                        styles = {this.props.styles}
                        key={"project-"+elem["name"]}
                        projectKey={"project-"+elem["name"]}
                        projectName = {elem["name"]}
                        role = {elem["role"]}
                        dates = {elem["ending"] !== 0 ? elem["beginning"]+"-"+elem["ending"] : elem["beginning"]+"-"}
                        />;})}
                        
                </View>
            </ScrollView>
        </ImageBackground>
    }
}