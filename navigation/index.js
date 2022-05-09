import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../components/MainPage";
import SecondPage from "../components/SecondPage";
import ThierdPage from "../components/ThierdPage";

const Stack=createStackNavigator();

export default function Stack (){
return <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen
    name="MainPage"
    component={MainPage}
    options={{title:"Thish is the Main Page"}}
    />
        <Stack.Screen
    name="SecondPage"
    component={SecondPage}
    options={{title:"Thish is the Second Page"}}
    />
           <Stack.Screen
    name="ThierdPage"
    component={ThierdPage}
    options={{title:"Thish is the Thierd Page"}}
    />
</Stack.Navigator>
</NavigationContainer>;
}