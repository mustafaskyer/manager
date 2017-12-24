import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import firebase from 'firebase'
import thunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

import Router from './Router'

export default class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAjjTzgg72_gv_aocNmhO8hR2x5nBLrha4',
            authDomain: 'manager-69b29.firebaseapp.com',
            databaseURL: 'https://manager-69b29.firebaseio.com',
            projectId: 'manager-69b29',
            storageBucket: 'manager-69b29.appspot.com',
            messagingSenderId: '234262588327'
          };
          if(!firebase.apps.length){
            firebase.initializeApp(config);
          }
          
    }
    render(){

        const store = createStore(reducers,{},applyMiddleware(thunk));
        return(
           <Provider store={store}>
                <Router />
           </Provider>
        )
    }
}

const styles = {
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',

    },
    text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}