import React from "react";
import {View, Text, ImageBackground} from "react-native";

import WelcomeText from "./helpers/WelcomeText.js";
import SkillContainer from "./helpers/SkillContainer.js";

export default class Skills extends React.Component{
    constructor(props){
        super(props);
        this.data = require("./data/data.json");
        this.skills = this.data["skills"];
    }
    render(){
        return <ImageBackground source = {require("../assets/skills.png")} style = {this.props.styles["cardBackground"]}>
            <View style = {this.props.styles["cardContentContainer"]}>
                <WelcomeText 
                styles = {[this.props.styles["welcomeHeader"],this.props.styles["welcomeHeaderText"]]}
                headerText = "Skills"/>
                <View style = {this.props.styles["skillsContainer"]}>
                    <WelcomeText
                    styles = {[this.props.styles["skillsHeader"], this.props.styles["skillsHeaderText"]]}
                    headerText = "Programming languages"/>
                    {this.skills.map((elem) => {return <SkillContainer
                    styles = {this.props.styles}
                    skillKey = {"skill-"+elem["name"]}
                    skillName = {elem["name"]}
                    skillLevel = {elem["level"]}
                    />})}
                </View>
            </View>
        </ImageBackground>
    }
}