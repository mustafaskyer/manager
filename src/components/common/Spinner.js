import React,{Component} from 'react'
import {View, ActivityIndicator} from 'react-native'

const Spinner = ({size})=> {
    return (
        <View style={Styles.spinner}>
            <ActivityIndicator size={size || "large"} />
        </View>
    );
}

const Styles = {
    spinner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}

export {Spinner}