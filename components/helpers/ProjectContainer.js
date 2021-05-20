import React from "react";
import {View} from "react-native";

import WelcomeText from "./WelcomeText.js";

export default class ProjectContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <View key = {this.props.projectKey}>
                <WelcomeText
                    styles = {["", this.props.styles["projectText"],"GoblinOne-Regular"]}
                    headerText = {this.props.projectName}/>
                <View style = {this.props.styles["roleAndDateContainer"]}>
                    <WelcomeText
                        styles = {[this.props.styles["roleContainer"], this.props.styles["roleDataText"], "GoblinOne-Regular"]}
                        headerText = {this.props.role}/>
                    <WelcomeText
                        styles = {[this.props.styles["dateContainer"], this.props.styles["roleDataText"], "GoblinOne-Regular"]}
                        headerText = {this.props.dates}/>
                </View>
            </View>;
    }
}