import React from 'react';
import {Text, View} from 'react-native';


const CardSection = (props) => {

    return (
        <View style={[Styles.ContainerStyle,props.style]}>
                {props.children}
        </View>
    );

};

const Styles = {

    ContainerStyle:{
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        borderWidth:1,
        borderColor:'#4d90fe'

    }
};


export { CardSection };