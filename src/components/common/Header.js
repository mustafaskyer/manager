import React from 'react';
import {Text ,View} from 'react-native';




const Header = (props) => {

    return(
        <View style={{ justifyContent:'center',alignItems:'center',backgroundColor:'#e5e5e5' }}>
            <Text style={Styles.HeaderComponentStyle}>
                {props.title}
            </Text>
        </View>
    );

};

const Styles = {

    HeaderComponentStyle:{
        alignItems:'center',
        flexDirection:'row',
        marginTop:10,
        height:40,
        fontSize:22,
    },

};

export { Header };