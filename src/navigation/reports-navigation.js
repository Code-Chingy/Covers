import {createStackNavigator} from '@react-navigation/stack';

import React, {Component} from 'react';

import ReportScreen from '../screens/reportScreen';
import UpdateReportScreen from '../screens/updateScreen';


const RStack = createStackNavigator();
export default class Report extends Component {
    render() {
        return (
            <RStack.Navigator
                screenOptions={{headerShown: false}}
            >
                <RStack.Screen name="Report" component={ReportScreen}/>
                <RStack.Screen name="UpdateReport" component={UpdateReportScreen}/>
            </RStack.Navigator>
        )
    }
}