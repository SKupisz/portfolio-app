import React from "react";
import {View, Text} from "react-native";
import {useFonts} from "expo-font";

const SkillContainer = ({skillName, skillLevel, skillKey, styles}) => {
    let [fontLoaded] = useFonts({
        "Pattaya-Regular": require("../../assets/fonts/Pattaya-Regular.ttf"),
        "GoblinOne-Regular": require("../../assets/fonts/GoblinOne-Regular.ttf")
    });

    return !fontLoaded ? <Text></Text> : <View style = {styles["skillContainerStyle"]} key = {skillKey}>
        <View style = {styles["skillNameContainer"]}>
            <Text style = {[styles["skillText"],{fontFamily: "GoblinOne-Regular"}]}>{skillName}</Text>
        </View>
        <View style = {styles["skillLevelContainer"]}>
            <View style = {styles["skillLevelBar"]}>
                <View style = {[styles["skillLevelShower"],{width: skillLevel+"%"}]}></View>
            </View>
        </View>
    </View>
};

export default SkillContainer;