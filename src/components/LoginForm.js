import React,{Component} from 'react'
import {Text} from 'react-native'
import {connect} from 'react-redux'
import { Card,CardSection,Input,Button,Spinner } from './common'

import { emailChanged,paswdChanged,loginUser } from '../actions'

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPaswdChange(text){
        this.props.paswdChanged(text);
    }
    onLogin(){
        const {email,paswd,loginUser} = this.props;
        loginUser({email,paswd});
        
    }
    renderSpinnerOrButton(){
        if(this.props.loading){
            return <Spinner size="large"/>
        }
        return (
            <Button onPress={this.onLogin.bind(this)}>
                Login
            </Button>
        );
    }
    
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="youEmail@Provider.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                     />
                </CardSection>
                
                <CardSection>
                    <Input
                    secureTextEntry
                    label="Password"
                    placeholder="******"
                    onChangeText={this.onPaswdChange.bind(this)}
                    value={this.props.paswd}
                    />
                </CardSection>

                <CardSection>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </CardSection>
                
                <CardSection>
                    {this.renderSpinnerOrButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({LoginData}) => {
    const { email,paswd,user,error,loading } = LoginData;
    return { 
        email,
        paswd,
        user,
        error,
        loading
     }
}

const styles = {
    errorText:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default connect(mapStateToProps,{ emailChanged,paswdChanged,loginUser })(LoginForm);