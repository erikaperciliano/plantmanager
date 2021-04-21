import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentfication';
import { Confirmation } from '../pages/Confirmation';

import colors from '../styles/colors';
import App from '../../App';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name="UserIdentfication"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
            
    </stackRoutes.Navigator>
);

export default AppRoutes;