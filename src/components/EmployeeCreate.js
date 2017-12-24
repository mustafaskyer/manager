import React,{Component} from 'react'

import { connect } from 'react-redux'
import { employeeUpdate,emplyeeCreate } from '../actions'

import { Card ,CardSection ,Button} from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component{

    onButtonPress(){
        const {name,phone,shift} = this.props;
        console.log(this.props);
        this.props.emplyeeCreate({name,phone,shift: shift || 'Monday'});
    }
    render(){
        console.log(this.props.employee);
        return(
            <Card>

                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>


            </Card>
        );
    }
    
}


const mapStateToProps = state => {
    const {name,phone,shift} = state.employeeForm
    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps,{ employeeUpdate,emplyeeCreate })(EmployeeCreate);