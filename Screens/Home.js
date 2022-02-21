import React from "react";
import {View, Image, Text, StyleSheet, Button, Pressable} from "react-native";
import {ImageBackground, SafeAreaView} from "react-native-web";
import {useNavigation} from "@react-navigation/native";
// import LanguageButton from "./LanguageButton";



const Home = () => {
    const navigate = (screenName) => {
        navigation.navigate(screenName)
    }

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../Images/logo.jpg')}
        />
        <Text style={styles.heading}>Pick & Go</Text>
        <Text style={styles.simpleText}>Place your pick and delivery request</Text>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Register</Text>
        </Pressable>
        <View style={styles.line}
        />
        <Text style={styles.simpleText}>Track your delivery without login</Text>
        <Pressable style={styles.buttonBorder} onPress={(() => navigate("Track"))}>
            <Text style={styles.text}>Track my order</Text>
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : '100%',
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#fff'
    },
    line : {
        marginBottom: 20,
        paddingTop: 20,
        width: 350,
        borderBottomColor: 'rgb(46, 62, 79)',
        borderBottomWidth: 1,
    },
    heading : {
        fontSize: 42,
        fontWeight: 'bold',
        color : 'rgb(253, 102, 1)',
        fontFamily : 'Arial',
        paddingTop : 0,
        paddingBottom: 0,
    },
    simpleText : {
        fontSize: 18,
        color : 'rgb(46, 62, 79)',
        fontFamily : 'Arial',
        paddingTop : 0,
        paddingBottom: 20,
    },
    image : {
        width: 300,
        height: 280,
        borderRadius: 0,
    },
    buttonBorder : {
        width : 280,
        height : 50,
        backgroundColor : '#fff',
        borderColor : 'rgb(253, 102, 1)',
        borderWidth: 3,
        borderRadius : 10,
        marginBottom : 20,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    },
    button : {
        width : 200,
        height : 50,
        backgroundColor : 'rgb(253, 102, 1)',
        borderRadius : 10,
        marginBottom : 20,
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
    },
    text : {
        fontSize : 24,
        textTransform : "uppercase",
        color : 'rgb(46, 62, 79)'
    }
});

export default Home;