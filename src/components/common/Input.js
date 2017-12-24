import React,{Component} from 'react'
import {TextInput,View,Text} from 'react-native'

const Input = ({ label ,value ,onChangeText ,placeholder,secureTextEntry}) => {
    // styles
    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput
            style={Styles.textInput}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            underlineColorAndroid='transparent'
            />
        </View>
    );
};

const Styles = {
    label:{
        fontSize:18,
        paddingLeft:20,
        flex:1
    },
    textInput:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        borderColor:'rgba(0,0,0,0)'
    },
    container:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}

export { Input }
