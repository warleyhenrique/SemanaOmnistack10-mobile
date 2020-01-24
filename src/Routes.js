import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from "./pages/Main";
import Profile from "./pages/Profile";


const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions:{
                title: 'Dev Radar'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions:{
                title: "Perfil Profile"
            }
        },
    },{
        defaultNavigationOptions:{
            headerTintColor: '#fff',
            headerStyle:{ 
                backgroundColor: '#7d40e7' 
            }
        }
    })
);

export default Routes;