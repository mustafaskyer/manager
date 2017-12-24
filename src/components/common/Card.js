import React from 'react';
import {View,Text} from 'react-native';


const Card = (props) => {


    return (

        <View style={{borderColor:'#4d90fe',borderWidth:0}}>
            {props.children}
        </View>

    );

};



export { Card };