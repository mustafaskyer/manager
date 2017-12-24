import React from 'react'
import { Scene,Router,Stack,Actions } from 'react-native-router-flux'

import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => {
    return (
        <Router  navigationBarStyle={{  backgroundColor:'#4d90fe' }} titleStyle={{ color:'white',alignSelf:'center' }}>
                <Stack key="root">
                    <Scene key="login" initial component={LoginForm} title="Login Now .." />
                    
                        <Scene key="employeeList" onRight={() => Actions.employeeCreate()} rightButtonTextStyle	={{ color:'white',alignSelf:'center',marginRight:10 }} rightTitle="Add" component={EmployeeList} title="Employee List" />
                        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee.." />
                        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit. ..." />
                    </Stack>
        </Router>
    );
}

export default RouterComponent;