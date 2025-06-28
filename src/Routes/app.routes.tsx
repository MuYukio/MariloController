import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register"
//import { Resume } from "../screens/Resume";
import { Feather } from "@expo/vector-icons";
import{ useTheme } from "styled-components/native"

const { Navigator, Screen } = createBottomTabNavigator();

import { MaterialIcons }  from "@expo/vector-icons";

export function AppRoutes(){

    const theme = useTheme();
    return(
        <Navigator id={undefined}
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text_light,
                tabBarLabelPosition: 'beside-icon'
            
            }}
        >
            <Screen 
                name = "listagem"
                component = {Dashboard}
                options={{
                    tabBarIcon:(({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen
                name = "Cadastrar"
                component = {Register}
                options={{
                    tabBarIcon:(({ size, color }) => (
                        <Feather
                            name="dollar-sign"
                            size={size}
                            color={color}
                        />
                    ))
                }}

            />
           
        </Navigator>
    )
}