import React from "react";
import {Text, View} from "react-native";
import {useFonts} from "expo-font";

const WelcomeText = (props) => {
    let [fontsLoaded] = useFonts({
        "Pattaya-Regular": require("../../assets/fonts/Pattaya-Regular.ttf"),
        "GoblinOne-Regular": require("../../assets/fonts/GoblinOne-Regular.ttf")
    });

    if(!fontsLoaded){
        return <Text></Text>
    }
    else return <View style = {props.styles[0]}>
        <Text style = {[props.styles[1],{fontFamily: props.styles.length === 2 ? "Pattaya-Regular" : props.styles[2]}]} numberOfLines={5}>{props.headerText}</Text>
    </View>
};

export default WelcomeText;