
import React,{ Component } from 'react'
import { CardSection,Input } from './common'
import { View,Text,Picker } from 'react-native'
import { connect } from 'react-redux'

import { employeeUpdate } from '../actions'
class EmployeeForm extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Input 
                    label="Name" 
                    placeholder="name .."
                    value={this.props.name}
                    onChangeText={text => this.props.employeeUpdate({ prop:'name',value:text })}
                     />
                </CardSection>

                <CardSection>
                    <Input 
                    label="Phone" 
                    placeholder="011 22 33 44"
                    value={this.props.phone}
                    onChangeText={text => this.props.employeeUpdate({ prop:'phone',value:text })}
                    />
                </CardSection>

                <CardSection style={{ marginTop:10 }}>
                    <Text style={styles.pickerText}>Shift</Text>
                    <Picker
                    selectedValue={this.props.shift}
                    onValueChange={text => this.props.employeeUpdate({ prop:'shift' ,value:text})}
                    style={{ flex:1 }}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wensday" value="Wensday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="sunday" value="sunday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerText:{
        fontSize:18,
        paddingLeft:20,
        position:'relative',
        marginTop:13
    }
}

const mapStateToProps = (state) => {
    const { name,phone,shift } = state.employeeForm
    
    return { name,phone,shift }
};

export default connect(mapStateToProps,{ employeeUpdate })(EmployeeForm);
