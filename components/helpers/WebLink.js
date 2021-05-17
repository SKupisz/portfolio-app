import React, { useCallback } from "react";
import {Alert, Pressable, Linking, Text} from "react-native";
import {useFonts} from "expo-font";

const WebOpeningButton = ({url, text, styles, buttonKey}) => {
    const handlePress = useCallback(async () => {
        const checkIfOpenable = await Linking.canOpenURL(url);
        if(checkIfOpenable){
            await Linking.openURL(url);
        }
        else{
            Alert.alert("Error when opening a link. Try again");
        }
    },[url]);

    let [fontLoaded] = useFonts({
        "Pattaya-Regular": require("../../assets/fonts/Pattaya-Regular.ttf")
    });

    return !fontLoaded ? <Text></Text> : <Pressable key = {buttonKey} style = {styles["linkPressable"]} onPress = {handlePress}>
        <Text style = {[styles["linkText"], {fontFamily: "Pattaya-Regular"}]}>{text}</Text>
    </Pressable>;
};

export default WebOpeningButton;