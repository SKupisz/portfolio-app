import React from "react";
import {Text, View} from "react-native";
import {useFonts} from "expo-font";

const WelcomeText = (props) => {
    let [fontsLoaded] = useFonts({
        "Pattaya-Regular": require("../../assets/fonts/Pattaya-Regular.ttf")
    });

    if(!fontsLoaded){
        return <Text></Text>
    }
    else return <View style = {props.styles[0]}>
        <Text style = {[props.styles[1],{fontFamily: "Pattaya-Regular"}]}>{props.headerText}</Text>
    </View>
};

export default WelcomeText;