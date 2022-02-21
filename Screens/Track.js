import React from "react";
import {
    View,
    Image,
    Text,
    ImageBackground,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Button,
    Pressable,
    SafeAreaView,
    Alert
} from "react-native";
import BackNavigation from "../Components/BackNavigation";

const createTwoButtonAlert = () =>
    Alert.alert(
        "Invalid Tracking Code",
        "The tracking code provided is invalid, please check and try again",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );

const Track = () => {

    createTwoButtonAlert();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <BackNavigation/>
                <View style={styles.statusBar}>
                    <Text style={styles.statusText}>On Process</Text>
                </View>
                <View style={styles.progress}>
                    <Image
                        style={styles.imagegreen}
                        source={require('../Images/green.png')}
                    />
                    <Text style={styles.progressText}>PickUp Picked up the goods</Text>
                </View>
                <View style={styles.progress}>
                    <Image
                        style={styles.imagegreen}
                        source={require('../Images/green.png')}
                    />
                    <Text style={styles.progressText}>Nearest Branch received your goods</Text>
                </View>
                <View style={styles.progress}>
                    <Image
                        style={styles.imagegreen}
                        source={require('../Images/green.png')}
                    />
                    <Text style={styles.progressText}>PGoods dispatched to vehicle</Text>
                </View>
                <View style={styles.progress}>
                    <Image
                        style={styles.imagegreen}
                        source={require('../Images/gray.png')}
                    />
                    <Text style={styles.progressText}>Goods reached receivers Branch</Text>
                </View>
                <View style={styles.progress}>
                    <Image
                        style={styles.imagegreen}
                        source={require('../Images/gray.png')}
                    />
                    <Text style={styles.progressText}>Goods Delivered</Text>
                </View>
            </View>
            <View style={styles.row}>
                <TextInput
                    // ref={this.messageInput}
                    style={styles.input}
                    // onChangeText={(text => typing(text))}
                    // value={"sfda"}
                    placeholder="Tracking Code"
                    keyboardType="default"
                />

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    // onPress={sendMessage}
                    underlayColor={'rgb(253, 102, 1)'}
                    activeOpacity={0}>
                    <View style={styles.button}>
                        <ImageBackground
                        source={require('../Images/send.png')}
                        resizeMode="cover"
                        style={styles.image}/>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imagegreen:{
        width: '16%',
        height: 62,

    },
    statusText:{
        fontSize:30,
    },
    progressText:{
        width:'84%',
        fontSize:18,
        paddingLeft:20
    },
    progress: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 70,
        marginBottom: 10
    },
    statusBar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 70,
        backgroundColor: 'rgb(253, 102, 1)',
        marginBottom: 10
    },
    image: {
        flex: 1,
        width: 30,
        height: 30,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    touchableHighlight: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    input: {
        fontSize : 18,
        height: 50,
        borderWidth: 0,
        padding: 10,
        width : 300,
        borderRadius : 10,
        backgroundColor : '#DADADA',
        color : '#000000',
        paddingLeft : 20,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgb(253, 102, 1)',
        borderWidth: 0,
        borderColor: '#CCC',
    },
});

export default Track;