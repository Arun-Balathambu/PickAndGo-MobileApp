import React from "react";
import {View, Image, Text,ImageBackground, TouchableHighlight, StyleSheet, Button, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";

const BackNavigation = () => {
    const navigation = useNavigation();

  return(
      <View style={styles.topView}>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <ImageBackground
                  source={require('../Images/arrow.png')}
                  resizeMode="cover"
                  style={styles.image}/>
          </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
    topView: {
        width: '100%',
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: 'rgb(46, 62, 79)'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button : {
        margin: 20,
        width : 70,
        height : 40,
        backgroundColor : 'rgb(253, 102, 1)',
        borderRadius : 10,
        marginBottom : 20,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    },
});

export default BackNavigation;